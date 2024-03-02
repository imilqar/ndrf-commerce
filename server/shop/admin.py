from django.contrib import admin
from unfold.admin import ModelAdmin, TabularInline
from mptt.admin import DraggableMPTTAdmin
from django.utils.translation import gettext_lazy as _

from .models import Category, Product, ProductImage


@admin.register(Category)
class CategoryAdmin(DraggableMPTTAdmin, ModelAdmin):
    list_display = (
        "indented_title",
        "slug",
    )

    def _tree_context(self, request):
        opts = self.model._meta
        return {
            "storageName": f"tree_{opts.app_label}_{opts.model_name}_collapsed",
            "treeStructure": self._build_tree_structure(self.get_queryset(request)),
            "levelIndent": self.mptt_level_indent,
            "messages": {
                "before": _("move node before node"),
                "child": _("move node to child position"),
                "after": _("move node after node"),
            },
            "expandTreeByDefault": self.expand_tree_by_default,
        }


class ProductImageInline(TabularInline):
    model = ProductImage
    extra = 1


@admin.register(Product)
class ProductAdmin(ModelAdmin):
    list_display = ("name", "slug", "category")
    search_fields = ["name", "color", "size"]
    exclude = ("sku",)
    inlines = [ProductImageInline]
