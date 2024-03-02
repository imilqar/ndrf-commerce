from django.shortcuts import render
from rest_framework import generics

from .models import Product
from .serializers import ProductSerializer


class ProductFeatureListView(generics.ListAPIView):
    queryset = Product.objects.filter(is_feaute=True)
    serializer_class = ProductSerializer


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.filter(parent__isnull=True)
    serializer_class = ProductSerializer


class ProductView(generics.RetrieveAPIView):
    lookup_field = "slug"
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
