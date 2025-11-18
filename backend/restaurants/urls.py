from django.urls import path

from restaurants.views import (
    CurrentUser,
    GetOrdersAPIView,
    TableDetailByCode,
    DishesByTableCode,
    CreateOrderAPIView,
)

urlpatterns = [
    path('api/table/', TableDetailByCode.as_view(), name='table-detail'),
    path('api/user/', CurrentUser.as_view(), name='current-user'),
    path("api/dishes/", DishesByTableCode.as_view(), name="dishes-by-table"),
    path("api/order/", CreateOrderAPIView.as_view(), name="create-order"),
    path("api/get-orders/", GetOrdersAPIView.as_view(), name="get-orders"),
]