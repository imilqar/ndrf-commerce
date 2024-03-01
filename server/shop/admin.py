from django.contrib import admin
from unfold.admin import ModelAdmin
from mptt.admin import DraggableMPTTAdmin
from django.utils.translation import gettext_lazy as _

from .models import Category, Product


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


@admin.register(Product)
class ProductAdmin(ModelAdmin):
    pass
