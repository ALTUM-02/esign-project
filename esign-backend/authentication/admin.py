from django.contrib import admin

from .models import User, AuditTrail


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("username", "email", "is_staff", "is_active")
    search_fields = ("username", "email")


@admin.register(AuditTrail)
class AuditTrailAdmin(admin.ModelAdmin):
    list_display = ("user", "action", "timestamp")
    list_filter = ("timestamp",)
    search_fields = ("action", "user__username")
