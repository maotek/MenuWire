import secrets

from django.contrib.auth.models import AbstractUser
from django.db import models


# Helper to display a locale-aware value when a JSONField stores translations.
def _locale_display(value, lang="en"):
    """Return a human-friendly string for a JSONField that stores translations.

    If `value` is a mapping (e.g. {'en': 'Name', 'fr': 'Nom'}) this returns
    the value for `lang` if present, otherwise the first available translation.
    If `value` is already a string, it is returned unchanged.
    """
    if isinstance(value, dict):
        return value.get(lang) or next(iter(value.values()), "")
    return value


# Default factory for locale dicts. Use a callable so Django can serialize it in migrations.
def default_locales():
    return {"en": "EN", "zh": "ZH", "nl": "NL"}


class Restaurant(models.Model):
    name        = models.JSONField(default=default_locales, help_text="Restaurant name in multiple languages, e.g. {'en': 'Bistro', 'fr': 'Bistro'}")
    code        = models.CharField(
                    max_length=12,
                    unique=True,
                    editable=True,
                    blank=True,
                    help_text="Identifier in the URL or the QR code"
                )
    address     = models.CharField(max_length=300, blank=True)
    phone       = models.CharField(max_length=20, blank=True)
    logo        = models.ImageField(
                    upload_to="restaurant_logos/",
                    blank=True,
                    null=True,
                    help_text="Upload a square PNG or JPG logo"
                  )
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    def __str__(self):
        return _locale_display(self.name)

    def delete(self, *args, **kwargs):
        # first delete the file
        if self.logo:
            self.logo.delete(save=False)
        # then delete the model
        super().delete(*args, **kwargs)

    def save(self, *args, **kwargs):
        if not self.code:
            # generate something like “AbC12XyZ34Q”
            self.code = secrets.token_urlsafe(8)
        super().save(*args, **kwargs)


class Table(models.Model):
    restaurant   = models.ForeignKey(
        "restaurants.Restaurant",
        on_delete=models.CASCADE,
        related_name="tables"
    )
    table_number = models.PositiveIntegerField(
        help_text="The human‑visible table number (e.g. 1, 2, 3…)",
    )
    code = models.CharField(
        max_length=32,
        unique=True,
        editable=True,
        blank=True,
        help_text="Opaque token used in the URL"
    )
    created_at   = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering        = ["restaurant", "table_number"]

    def save(self, *args, **kwargs):
        if not self.code:
            # generate a URL‑safe random token
            self.code = secrets.token_urlsafe(16)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{_locale_display(self.restaurant.name)}, Table {self.table_number}"


class StaffUser(AbstractUser):
    """
    A restaurant staff account, tied to one Restaurant.
    Inherits:
     - username (unique)
     - password (hashed)
     - first_name, last_name, email, is_staff, is_superuser, is_active, etc.
    """
    restaurant = models.ForeignKey(
        Restaurant,
        on_delete=models.CASCADE,
        null=True,  # allow NULL in the database
        blank=True,  # allow blank in forms/admin
        related_name="staff_users",
        help_text="Which restaurant this user works at",
    )
    is_admin = models.BooleanField(
        default=False,
        help_text="Owner or manager if True; regular staff if False"
    )

    def __str__(self):
        if self.restaurant:
            return f"{self.username} @ {_locale_display(self.restaurant.name)}"
        return self.username


class DishCategory(models.Model):
    restaurant = models.ForeignKey(
        Restaurant,
        on_delete=models.CASCADE,
        related_name="dish_categories",
    )
    name = models.JSONField(default=default_locales, help_text="Category name in multiple languages, e.g. {'en': 'Starters', 'fr': 'Entrées'}")

    class Meta:
        verbose_name = "DishCategory"
        verbose_name_plural = "DishCategories"
        unique_together = ("restaurant", "name")
        ordering = ["name"]

    def __str__(self):
        return f"{_locale_display(self.restaurant.name)} – {_locale_display(self.name)}"


class Tag(models.Model):
    """
    Simple tag that can be reused across dishes,
    even in different restaurants if you like.
    """
    restaurant = models.ForeignKey(
        Restaurant,
        on_delete=models.CASCADE,
        related_name="tags",
    )
    name = models.JSONField(default=default_locales, help_text="Tag name in multiple languages, e.g. {'en': 'Spicy', 'fr': 'Épicé'}")

    class Meta:
        unique_together = (("restaurant", "name"),)
        ordering = ["name"]

    def __str__(self):
        return f"{_locale_display(self.restaurant.name)} – {_locale_display(self.name)}"


class Option(models.Model):
    """
    A restaurant-scoped extra (e.g. 'Extra Rice') that dishes can opt into.
    """
    restaurant  = models.ForeignKey(
        Restaurant,
        on_delete=models.CASCADE,
        related_name="options",
        help_text="Which restaurant this option belongs to",
    )
    name        = models.JSONField(default=default_locales, help_text="Option name in multiple languages, e.g. {'en': 'Extra Rice', 'fr': 'Riz supplémentaire'}")
    description = models.JSONField(blank=True, default=default_locales, help_text="Option description in multiple languages")
    price       = models.DecimalField(max_digits=8, decimal_places=2)

    class Meta:
        verbose_name = "Option"
        verbose_name_plural = "Options"
        unique_together = (("restaurant", "name"),)
        ordering = ["restaurant", "name"]

    def __str__(self):
        return f"{_locale_display(self.restaurant.name)} - {_locale_display(self.name)} (+{self.price})"


class Dish(models.Model):
    category = models.ForeignKey(
        DishCategory,
        on_delete=models.CASCADE,
        related_name="dishes",
    )
    name = models.JSONField(default=default_locales, help_text="Dish name in multiple languages, e.g. {'en': 'Caesar Salad', 'fr': 'Salade César'}")
    description = models.JSONField(blank=True, default=default_locales, help_text="Dish description in multiple languages")
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.ImageField(
        upload_to="dish_images/",
        blank=True,
        null=True,
        help_text="Optional picture of the dish",
    )
    tags = models.ManyToManyField(
        Tag,
        blank=True,
        related_name="dishes",
        help_text="Select zero or more tags",
    )

    options = models.ManyToManyField(
        Option,
        blank=True,
        related_name="dishes",
        help_text="Select zero or more extra options",
    )

    class Meta:
        verbose_name = "Dish"
        verbose_name_plural = "Dishes"
        unique_together = ("category", "name")
        ordering = ["category__name", "name"]

    def __str__(self):
        return f"{_locale_display(self.name)} ({_locale_display(self.category.name)})"


class Order(models.Model):
    STATUS_PENDING = "pending"
    STATUS_PLACED = "placed"
    STATUS_PREPARING = "preparing"
    STATUS_SERVED = "served"
    STATUS_CANCELLED = "cancelled"
    STATUS_PAID = "paid"

    STATUS_CHOICES = [
        (STATUS_PENDING, "Pending"),
        (STATUS_PLACED, "Placed"),
        (STATUS_PREPARING, "Preparing"),
        (STATUS_SERVED, "Served"),
        (STATUS_CANCELLED, "Cancelled"),
        (STATUS_PAID, "Paid"),
    ]

    restaurant = models.ForeignKey(
        Restaurant,
        on_delete=models.CASCADE,
        related_name="orders",
    )
    table = models.ForeignKey(
        Table,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="orders",
    )
    staff = models.ForeignKey(
        "restaurants.StaffUser",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="handled_orders",
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=STATUS_PLACED)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    metadata = models.JSONField(blank=True, default=dict, help_text="Extra order metadata (payment id, notes, etc.)")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"Order #{self.pk} @ {_locale_display(self.restaurant.name)} ({self.status})"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="items")
    dish = models.ForeignKey(Dish, on_delete=models.SET_NULL, null=True, blank=True)
    # snapshot of the dish name at order time (localized)
    name = models.JSONField(default=default_locales)
    quantity = models.PositiveIntegerField(default=1)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    options = models.JSONField(default=list, blank=True, help_text="Snapshot of options chosen at order time")
    notes = models.TextField(blank=True)

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return f"{_locale_display(self.name)} x{self.quantity} (@ {self.unit_price})"