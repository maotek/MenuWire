import json
from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer

class OrderConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        user = self.scope['user']

        if user.is_authenticated and hasattr(user, 'restaurant') and user.restaurant:
            self.restaurant_id = user.restaurant.id
            self.room_group_name = f'restaurant_{self.restaurant_id}'

            await self.channel_layer.group_add(
                self.room_group_name,
                self.channel_name
            )

            print(f"WebSocket connected for restaurant {self.restaurant_id}")
            await self.accept()
        else:
            await self.close()

    async def disconnect(self, close_code):
        print(f"WebSocket disconnected for restaurant {getattr(self, 'restaurant_id', 'unknown')} with code {close_code}")
        if hasattr(self, 'room_group_name'):
            await self.channel_layer.group_discard(
                self.room_group_name,
                self.channel_name
            )

    async def receive(self, text_data):
        """
        Receive a message from the WebSocket.
        """
        data = json.loads(text_data)
        message_type = data.get('type')

        if message_type == 'update_order_status':
            await self.update_order_status(data)

    async def update_order_status(self, event):
        """
        Update an order's status and broadcast the change.
        """
        order_id = event.get('order_id')
        new_status = event.get('status')
        user = self.scope['user']

        # Permissions and validation
        if not (order_id and new_status and user.is_authenticated and hasattr(user, 'restaurant')):
            return

        # Database update must be synchronous, so we run it in a thread
        await self.update_order_in_db(order_id, new_status, user.restaurant)

        # Broadcast the change to the group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type": "send_status_update",
                "order_id": order_id,
                "status": new_status,
            }
        )

    @database_sync_to_async
    def update_order_in_db(self, order_id, new_status, restaurant):
        from .models import Order
        try:
            order = Order.objects.get(id=order_id, restaurant=restaurant)
            order.status = new_status
            order.save()
        except Order.DoesNotExist:
            # Handle case where order is not found or doesn't belong to the restaurant
            print(f"Order {order_id} not found for restaurant {restaurant.id}")


    # Handlers

    async def send_new_order(self, event):
        order_data = event['order']
        await self.send(text_data=json.dumps({
            'type': 'new_order',
            'order': order_data
        }))

    async def send_status_update(self, event):
        await self.send(text_data=json.dumps({
            'type': 'order_status_update',
            'order_id': event['order_id'],
            'status': event['status'],
        }))