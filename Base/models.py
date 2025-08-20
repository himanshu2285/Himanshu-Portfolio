from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=40)
    email = models.EmailField(max_length=40)
    content = models.TextField(max_length=400)
    number = models.CharField(max_length=15)
    # address = models.CharField(max_length=100)
    
    def __str__(self):  # Fixed: was __self__ instead of __str__
        return self.name
    
    class Meta:
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"
        ordering = ['-id']  # Show newest first