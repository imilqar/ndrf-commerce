import uuid
from django.utils.text import slugify


def generate_sku(product_name):
    slug = slugify(product_name)
    uuid_part = str(uuid.uuid4())[:8]
    return f"{slug}-{uuid_part}"
