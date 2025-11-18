"""
ASGI config for menuwire project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application

# Set the settings module environment variable first.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'menuwire.settings')

# Initialize the Django ASGI application early.
# This is the crucial step that configures Django's settings.
django_asgi_app = get_asgi_application()

# Now that settings are configured, we can safely import our other modules.
from channels.routing import ProtocolTypeRouter, URLRouter
# Custom JWT middleware stack - TODO: change to session based auth later
from restaurants.middleware import JwtAuthMiddleware
from restaurants import routing

# The main application router
application = ProtocolTypeRouter({
    "http": django_asgi_app,
    "websocket": JwtAuthMiddleware(
        URLRouter(
            routing.websocket_urlpatterns
        )
    ),
})