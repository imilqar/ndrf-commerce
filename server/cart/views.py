from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view


from .serializers import CartSerializer, AddCartItemSerializer
from .models import Cart, CartItem
from shop.models import Product


@api_view(["GET"])
def get_cart_view(request):
    cart = Cart.objects.filter(pk=request.session.get("session_cart_id")).first()
    serializer = CartSerializer(cart)
    return Response(serializer.data)


@api_view(["POST"])
def add_product_to_cart_view(request):
    try:
        serializer = AddCartItemSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        cart = Cart.objects.filter(pk=request.session.get("session_cart_id")).first()

        CartItem(
            cart=cart,
            product=serializer.data.get("product"),
            size=serializer.data.get("size"),
        ).save()

        return Response(True)

    except Product.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
def remove_product_from_cart_view(request, pk):
    CartItem.objects.filter(pk=pk).delete()
    return Response(True)
