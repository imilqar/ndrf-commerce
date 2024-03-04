from django.urls import path

from .views import CartItemListView

app_name = "cart"

urlpatterns = [path("api/cart/", CartItemListView.as_view(), name="cart_cart_items")]
