from django.urls import path

from .views import ProductListView, ProductFeatureListView, ProductView


urlpatterns = [
    path("api/products/", ProductListView.as_view()),
    path(
        "api/products/featured",
        ProductFeatureListView.as_view(),
    ),
    path("api/products/<slug:slug>/", ProductView.as_view()),
]
