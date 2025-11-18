from django.urls import path # Change this import from re_path to path
from . import consumers

websocket_urlpatterns = [
    # Change re_path to path and remove the regex characters
    path('ws/orders/', consumers.OrderConsumer.as_asgi()),
]