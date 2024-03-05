from django.urls import path

from .views import (
    get_cart_view,
    add_product_to_cart_view,
    remove_product_from_cart_view,
)


urlpatterns = [
    path("api/cart/", get_cart_view),
    path("api/cart/add", add_product_to_cart_view),
    path(
        "api/cart/remove/<int:pk>",
        remove_product_from_cart_view,
    ),
]
