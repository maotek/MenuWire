"""
URL configuration for menuwire project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.http import JsonResponse
from django.urls import path, include
from rest_framework import status

from rest_framework_simplejwt.views import (
       TokenObtainPairView,
       TokenRefreshView,
       TokenVerifyView,
   )



urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("restaurants.urls")),
]

urlpatterns += [
   path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
   path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
   path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

   # re_path(r'^.*$', lambda request: global_404(request)),
]

# Show image in admin panel
if settings.DEBUG:
    # this line tells Django to serve files under MEDIA_URL from MEDIA_ROOT
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# Error handlers
def global_404(request, exception=None):
    """
    Always return JSON for 404 errors, regardless of path.
    """
    return JsonResponse(
        {'detail': 'Not found.'},
        status=status.HTTP_404_NOT_FOUND
    )

def global_500(request):
    """
    Optional: JSON for 500 errors too.
    """
    return JsonResponse(
        {'detail': 'Server error.'},
        status=status.HTTP_500_INTERNAL_SERVER_ERROR
    )

# Point Django’s handlers at your functions:
handler404 = 'menuwire.urls.global_404'
handler500 = 'menuwire.urls.global_500'