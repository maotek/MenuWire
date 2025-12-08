from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db import transaction
from .models import Table, DishCategory, Dish, Option, Restaurant, Order, OrderItem
from .serializers import CategoryWithDishesSerializer, OptionSerializer, OrderSerializer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from rest_framework import generics


class CurrentUser(APIView):
    """
    GET /api/user/
    Headers: Authorization: Bearer <token>
    Response: {
        "username": <str>,
        "first_name": <str>,
        "restaurant_name": <str|null>
    }
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        restaurant_name = None
        if hasattr(user, 'restaurant') and user.restaurant:
            restaurant_name = user.restaurant.name

        data = {
            'username': user.username,
            'first_name': user.first_name,
            'restaurant_name': restaurant_name,
        }
        return Response(data, status=status.HTTP_200_OK)


class TableDetailByCode(APIView):
    """
    GET /api/table/?code=<table_code>
    Response:
    {
        "table_number": <int>,
        "restaurant": {
            "name": <str>,
            "logo_url": <str|null>
        }
    }
    """
    permission_classes = []  # public endpoint

    def get(self, request, *args, **kwargs):
        code = request.query_params.get('code')
        if not code:
            return Response(
                {"detail": "Missing 'code' query parameter"},
                status=status.HTTP_400_BAD_REQUEST
            )

        table = get_object_or_404(
            Table.objects.select_related('restaurant'),
            code=code
        )
        restaurant = table.restaurant

        logo_url = None
        if restaurant.logo:
            logo_url = restaurant.logo.url

        print("Got table:", table.table_number, "for restaurant:", restaurant.name)

        data = {
            'table_number': table.table_number,
            'restaurant': {
                'name': restaurant.name,
                'logo_url': logo_url,
            }
        }
        return Response(data, status=status.HTTP_200_OK)


from .serializers import CategoryWithDishesSerializer


class CreateOrderAPIView(APIView):
    """POST /api/orders/

    Accepts either:
    - A JSON array of item objects (legacy shape). Example: [ { dish: {id:1}, quantity: 2, options: [...] }, ... ]
    - A JSON object with `items` and optional `table`/`table_code`: { "table": "ABC123", "items": [ ... ] }

    Each item must include a `dish` (id or object with id), optional `quantity` (default 1),
    and optional `options` (list of ids or objects with id).
    """
    permission_classes = []  # public endpoint for now

    def post(self, request):
        raw = request.data

        # Support two shapes: a bare list (legacy) or an object containing items + optional table
        if isinstance(raw, dict):
            payload = raw.get("items")
            table_code = raw.get("table") or raw.get("table_code")
        else:
            payload = raw
            table_code = request.query_params.get("table_code")

        if not isinstance(payload, list) or not payload:
            return Response({"detail": "Request body must be a non-empty list of items, or an object with 'items'."}, status=status.HTTP_400_BAD_REQUEST)

        # Resolve dishes and ensure they all belong to the same restaurant
        first_rest = None
        items_to_create = []
        order_subtotal = 0
        try:
            # Collect all option IDs from the payload to fetch them in a single query
            all_option_ids = [
                int(oid)
                for entry in payload
                for o in entry.get("options", [])
                if (oid := (o.get("id") if isinstance(o, dict) else o))
            ]
            # Fetch all relevant options at once
            options_qs = Option.objects.filter(id__in=all_option_ids)
            options_map = {opt.id: opt for opt in options_qs}

            for entry in payload:
                dish_entry = entry.get("dish") if isinstance(entry, dict) else entry
                dish_id = dish_entry.get("id") if isinstance(dish_entry, dict) else dish_entry
                if not dish_id:
                    raise ValueError("Each item must include a dish id")

                dish = Dish.objects.select_related("category__restaurant").get(id=dish_id)
                rest = dish.category.restaurant
                if first_rest is None:
                    first_rest = rest
                elif first_rest.pk != rest.pk:
                    raise ValueError("All dishes in an order must belong to the same restaurant")

                quantity = int(entry.get("quantity", 1))
                line_total = dish.price * quantity

                # Process options for this item
                item_options_snapshot = []
                opt_ids = [
                    int(oid)
                    for o in entry.get("options", [])
                    if (oid := (o.get("id") if isinstance(o, dict) else o))
                ]

                for opt_id in opt_ids:
                    option = options_map.get(opt_id)
                    if not option or option.restaurant_id != first_rest.id:
                        raise ValueError(f"Option ID {opt_id} is invalid or does not belong to this restaurant.")
                    
                    # Add option price to the line total
                    line_total += option.price * quantity
                    
                    # Add option details to the snapshot
                    item_options_snapshot.append({
                        "id": option.id,
                        "name": option.name,
                        "price": str(option.price) # Use string for Decimal serialization
                    })

                order_subtotal += line_total
                items_to_create.append({
                    "dish": dish,
                    "quantity": quantity,
                    "options_snapshot": item_options_snapshot
                })
        except Dish.DoesNotExist:
            return Response({"detail": "One or more dishes not found"}, status=status.HTTP_400_BAD_REQUEST)
        except (ValueError, TypeError) as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        # Create order and items in a transaction
        with transaction.atomic():
            # If a table code was provided, resolve it
            table_obj = None
            if table_code:
                try:
                    table_obj = Table.objects.get(code=table_code, restaurant=first_rest)
                except Table.DoesNotExist:
                    return Response({"detail": "Table not found for this restaurant."}, status=status.HTTP_400_BAD_REQUEST)

            # Create the order with pre-calculated totals
            order = Order.objects.create(
                restaurant=first_rest,
                table=table_obj,
                status=Order.STATUS_PLACED,
                subtotal=order_subtotal,
                total=order_subtotal # Assuming total is same as subtotal for now
            )

            # Create order items
            for item_data in items_to_create:
                dish = item_data["dish"]
                OrderItem.objects.create(
                    order=order,
                    dish=dish,
                    quantity=item_data["quantity"],
                    options=item_data["options_snapshot"],
                    name=dish.name,
                    unit_price=dish.price,
                )

        # Serialize the full order to send via WebSocket
        serializer = OrderSerializer(order)
        order_data = serializer.data

        # Broadcast the new order to the restaurant's group
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            f"restaurant_{order.restaurant.id}",
            {
                "type": "send_new_order", # This corresponds to the send_new_order method in the consumer
                "order": order_data,
            },
        )

        # Build response
        # resp_items = []
        # for it in created_items:
        #     resp_items.append({
        #         "id": it.pk,
        #         "dish": it.dish.pk if it.dish else None,
        #         "name": it.name,
        #         "quantity": it.quantity,
        #         "unit_price": str(it.unit_price),
        #         "options": OptionSerializer(it.options.all(), many=True).data,
        #         "notes": it.notes,
        #     })

        # resp = {
        #     "id": order.pk,
        #     "restaurant": order.restaurant.pk,
        #     "date": order.created_at.isoformat(),
        #     "status": order.status,
        #     "subtotal": str(order.subtotal),
        #     "total": str(order.total),
        #     "items": resp_items,
        # }
        # return Response(resp, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_201_CREATED)

class DishesByTableCode(APIView):
    """
    GET /api/dishes/?table_code=XXXX
    """
    permission_classes = []  # or [IsAuthenticated] if you lock it down

    def get(self, request):
        code = request.query_params.get("table_code")
        if not code:
            return Response(
                {"detail": "table_code query parameter is required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # ensure table exists (404 if not)
        table = get_object_or_404(Table.objects.select_related('restaurant'), code=code)
        restaurant = table.restaurant

        # fetch all categories for this restaurant, prefetch dishes→tags,options
        qs = DishCategory.objects.filter(restaurant=restaurant)\
            .prefetch_related(
                "dishes__tags",
                "dishes__options"
            )

        serializer = CategoryWithDishesSerializer(qs, many=True)
        return Response(serializer.data)
    

class GetOrdersAPIView(APIView):
    """
    GET /api/orders/
    Headers: Authorization: Bearer <token>
    Response: List of orders for the authenticated user's restaurant
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        if not hasattr(user, 'restaurant') or not user.restaurant:
            return Response(
                {"detail": "User is not associated with any restaurant."},
                status=status.HTTP_400_BAD_REQUEST
            )

        restaurant = user.restaurant
        qs = Order.objects.filter(restaurant=restaurant).prefetch_related('items')

        serializer = OrderSerializer(qs, many=True)

        return Response(serializer.data)