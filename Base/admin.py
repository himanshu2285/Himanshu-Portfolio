from django.contrib import admin
from Base.models import Contact

# Register your models here.
# admin.site.register(Contact)

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'number', 'content_preview', 'date_created')
    list_filter = ('name', 'email')
    search_fields = ('name', 'email', 'number')
    readonly_fields = ('date_created',)
    
    def content_preview(self, obj):
        """Show a preview of the content in the admin list"""
        return obj.content[:50] + '...' if len(obj.content) > 50 else obj.content
    content_preview.short_description = 'Message Preview'
    
    def date_created(self, obj):
        """Display when the contact was created"""
        return obj.id  # Since we don't have a date field, using ID as proxy
    date_created.short_description = 'Entry ID'