from rest_framework import serializers
from .models import DishCategory, Dish, Tag, Option, Order, OrderItem


class TagSerializer(serializers.ModelSerializer):
    name = serializers.JSONField()

    class Meta:
        model = Tag
        fields = ["id", "name"]


class OptionSerializer(serializers.ModelSerializer):
    name = serializers.JSONField()
    description = serializers.JSONField()

    class Meta:
        model = Option
        fields = ["id", "name", "description", "price"]


class DishSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    options = OptionSerializer(many=True, read_only=True)
    image = serializers.ImageField(read_only=True)
    name = serializers.JSONField()
    description = serializers.JSONField()

    class Meta:
        model = Dish
        fields = [
            "id", "name", "description", "price", "image",
            "tags", "options",
        ]


class CategoryWithDishesSerializer(serializers.ModelSerializer):
    category_name = serializers.JSONField(source="name")
    dishes = DishSerializer(many=True, read_only=True)

    class Meta:
        model = DishCategory
        fields = ["id", "category_name", "dishes"]


class OrderItemSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = OrderItem
        fields = ["id", "name", "quantity", "options", "notes", "unit_price"]

class TableSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    table_number = serializers.IntegerField()

    class Meta:
        model = Order
        fields = ["id", "table_number"]

class OrderSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    table = TableSerializer()
    date = serializers.DateTimeField(source='created_at', read_only=True)
    status = serializers.CharField()
    # subtotal = serializers.DecimalField(max_digits=10, decimal_places=2)
    total = serializers.DecimalField(max_digits=10, decimal_places=2)
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ["id", "table", "items", "date"] # "status", "subtotal", "total",