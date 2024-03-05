from rest_framework import serializers

from .models import Cart, CartItem
from shop.models import Product


class CartItemProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["name", "slug", "image", "price", "color"]


class CartItemSerializer(serializers.ModelSerializer):
    product = CartItemProductSerializer()

    class Meta:
        model = CartItem
        fields = ["uuid", "product", "quantity", "size", "has_stock"]


class CartSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ["cart_items"]


class AddCartItemSerializer(serializers.Serializer):
    product_slug = serializers.CharField()
    size = serializers.CharField()
    product = serializers.SerializerMethodField()

    def get_product(self, obj):
        try:
            product = Product.objects.get(slug=obj["product_slug"])
            return product
        except Product.DoesNotExist:
            return None

    def validate_product_slug(self, value):
        if not Product.objects.filter(slug=value).exists():
            raise serializers.ValidationError("Product not found")
        return value

    def validate_size(self, value):
        product_slug = self.initial_data.get("product_slug")

        try:
            product = Product.objects.get(slug=product_slug)
        except Product.DoesNotExist:
            raise serializers.ValidationError("Product not found")

        available_sizes = [stock["size"] for stock in product.stock]

        if value not in available_sizes:
            raise serializers.ValidationError("Fuck You")
        return value
