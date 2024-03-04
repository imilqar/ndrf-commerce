from ..models import Cart


class EnsureCartMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if "/api/cart" in request.path:
            cart_id = request.COOKIES.get("session_cart_id")

            if not cart_id:
                cart = Cart.objects.create()
                cart_id = cart.uuid.hex
            else:
                try:
                    cart = Cart.objects.get(uuid=cart_id)
                except Cart.DoesNotExist:
                    cart = Cart.objects.create()

            request.session["session_cart_id"] = cart.uuid.hex

            response = self.get_response(request)
            response.set_cookie("session_cart_id", cart_id, max_age=31536000)

            return response
        else:
            return self.get_response(request)
