import secrets
from django import forms
from django.contrib import admin
from django.contrib.admin import RelatedOnlyFieldListFilter
from django.contrib.auth.admin import UserAdmin
from django.utils.html import format_html
from .models import Order, OrderItem, Restaurant, Table, StaffUser, DishCategory, Dish, Tag, Option


class SortedRelatedOnlyFieldListFilter(RelatedOnlyFieldListFilter):
    """
    A RelatedOnlyFieldListFilter that sorts its choices by label.
    """
    def lookups(self, request, model_admin):
        # Grab the usual (value, label) choices…
        choices = super().lookups(request, model_admin)
        # …then return them sorted by the human‐readable label
        return sorted(choices, key=lambda x: x[1].lower())


@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display    = ["id", "name", "code", "address", "phone", "logo_preview"]
    search_fields   = ["name", "code"]
    readonly_fields = ["logo_preview"]
    fieldsets = (
        (None, {"fields": ("name", "code", "address", "phone")}),
        ("Logo", {"fields": ("logo", "logo_preview")}),
    )

    def logo_preview(self, obj):
        if obj.logo:
            return format_html(
                '<img src="{}" style="height:60px;object-fit:contain;"/>',
                obj.logo.url
            )
        return "(No logo)"
    logo_preview.short_description = "Logo Preview"



@admin.register(Table)
class TableAdmin(admin.ModelAdmin):
    list_display    = ["id", "restaurant", "table_number", "code"]
    list_filter     = ["restaurant"]
    search_fields   = ["code", "restaurant__name"]
    fieldsets = (
        (None, {"fields": ("restaurant", "table_number", "code")}),
    )


@admin.register(StaffUser)
class StaffUserAdmin(UserAdmin):
    model = StaffUser
    list_display = ["username", "first_name", "last_name", "restaurant", "is_admin", "is_active", "is_superuser", "is_staff"]
    list_filter  = ["restaurant", "is_admin", "is_active", "is_admin"]
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        ("Personal info", {"fields": ("first_name", "last_name", "email")}),
        ("Permissions", {
            "fields": ("is_admin", "is_active", "is_staff", "is_superuser", "groups", "user_permissions")
        }),
        ("Restaurant", {"fields": ("restaurant",)}),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )


@admin.register(DishCategory)
class DishCategoriesAdmin(admin.ModelAdmin):
    list_display = ["restaurant", "name"]
    list_filter = ["restaurant"]
    search_fields = ["restaurant__name", "name"]


@admin.register(Dish)
class DishAdmin(admin.ModelAdmin):
    list_display    = ["id", "name", "category", "price"]
    list_filter = [
        ("category__restaurant", SortedRelatedOnlyFieldListFilter),
        ("category", SortedRelatedOnlyFieldListFilter),
        "tags",
        "options",
    ]
    search_fields   = ["name", "description"]
    filter_horizontal = ["tags", "options"]
    fieldsets = (
        (None, {
            "fields": ("category", "name", "description", "price", "image")
        }),
        ("Meta", {
            "fields": ("tags", "options")
        }),
    )


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display    = ["id", "name", "restaurant"]
    list_filter     = ["restaurant"]
    search_fields   = ["name", "restaurant__name"]
    fieldsets = (
        (None, {"fields": ("restaurant", "name")}),
    )


@admin.register(Option)
class OptionAdmin(admin.ModelAdmin):
    list_display    = ["id", "name", "restaurant", "price"]
    list_filter     = ["restaurant"]
    search_fields   = ["name", "restaurant__name", "description"]
    fieldsets = (
        (None, {"fields": ("restaurant", "name", "description", "price")}),
    )


class OrderItemInline(admin.TabularInline):
    """Inline for OrderItem on the Order admin page."""
    model = OrderItem
    extra = 0
    readonly_fields = ("dish", "name", "quantity", "unit_price", "options", "notes")
    show_change_link = True


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display    = ["id", "restaurant", "table", "created_at", "total"]
    list_filter     = ["restaurant", "created_at"]
    # Order has no 'name' field; search by restaurant name instead
    search_fields   = ["restaurant__name"]
    inlines = [OrderItemInline]
    fieldsets = (
        (None, {"fields": ("restaurant", "table", "total")} ),
    )

admin.site.site_url = "http://localhost:3000/"