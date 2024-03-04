from rest_framework import serializers
from django.db.models import Q


from .models import Category, Product, ProductImage, ProductStock


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
        fields = ["uuid", "color", "slug"]


class ProductStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductStock
        fields = ["size", "quantity"]


class ProductSerializer(serializers.ModelSerializer):
    product_image = ImageSerializer(many=True, read_only=True)
    category = CategorySerializer(many=False, read_only=True)
    # variants = ProductVariantSerializer(many=True, read_only=True)
    stock = ProductStockSerializer(many=True, read_only=True)
    variants = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            "uuid",
            "category",
            "name",
            "description",
            "slug",
            "image",
            "price",
            "color",
            "product_image",
            "stock",
            "variants",
            "updated_at",
        ]

    def get_variants(self, obj):
        if obj.parent is None:
            variants = Product.objects.filter(parent=obj)
        else:
            variants = Product.objects.filter(
                Q(parent=obj.parent) | Q(uuid=obj.parent.uuid)
            )

        variants = variants.exclude(uuid=obj.uuid)  # Exclude the current product

        serializer = ProductVariantSerializer(variants, many=True)
        return serializer.data
