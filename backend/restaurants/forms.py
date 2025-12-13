from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import StaffUser

class StaffUserCreationForm(UserCreationForm):
    class Meta:
        model = StaffUser
        fields = ("username", "first_name", "last_name", "email", "restaurant", "is_admin")

class StaffUserChangeForm(UserChangeForm):
    class Meta:
        model = StaffUser
        fields = "__all__"
