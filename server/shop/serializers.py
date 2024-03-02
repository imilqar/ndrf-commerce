from rest_framework import serializers

from .models import Category, Product, ProductImage


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["image", "alt_text"]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name", "slug"]


class ProductVariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["color", "size", "quantity", "name", "sku"]


class ProductSerializer(serializers.ModelSerializer):
    product_image = ImageSerializer(many=True, read_only=True)
    category = CategorySerializer(many=False, read_only=True)
    variants = ProductVariantSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            "uuid",
            "category",
            "name",
            "description",
            "slug",
            "sku",
            "image",
            "price",
            "color",
            "size",
            "quantity",
            "product_image",
            "variants",
        ]
