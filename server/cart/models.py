import uuid
from django.db import models
from django.utils.translation import gettext_lazy as _

from shop.models import Product


class Cart(models.Model):
    uuid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return f"Cart created at {self.created_at}"


class CartItem(models.Model):
    uuid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="cart_items")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    size = models.CharField(max_length=20)
    has_stock = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.quantity}x {self.product.name} in Cart {self.cart.session_id}"
