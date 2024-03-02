from django.urls import path

from .views import ProductListView, ProductFeatureListView, ProductView

app_name = "shop"

urlpatterns = [
    path("api/products/", ProductListView.as_view(), name="shop_products"),
    path(
        "api/products/featured",
        ProductFeatureListView.as_view(),
        name="shop_products_featured",
    ),
    path("api/products/<slug:slug>/", ProductView.as_view(), name="shop_product"),
]
