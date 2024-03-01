from django.contrib import admin
from unfold.admin import ModelAdmin

from django.contrib.auth.models import User, Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


admin.site.unregister(Group)
admin.site.unregister(User)


@admin.register(Group)
class GroupAdmin(ModelAdmin):
    pass


@admin.register(User)
class UserAdmin(BaseUserAdmin, ModelAdmin):
    pass
