from rest_framework import generics

from .serializers import CartItemSerializer
from .models import CartItem
from shop.models import Product


class CartItemListView(generics.ListAPIView):
    serializer_class = CartItemSerializer

    def get_queryset(self):
        if "session_cart_id" in self.request.session:
            session_cart_id = self.request.session["session_cart_id"]
            queryset = CartItem.objects.filter(cart=session_cart_id)
            return queryset
        else:
            return []


# class AddCartItemView(generics.CreateAPIView):
#     serializer_class = CartItemSerializer

#     def get_queryset(self):
#         return
