from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('contact/', views.home, name='contact'),
    path('success/', views.contact_success, name='contact_success'),
]


# urlpatterns = [
    
#     path('', views.contact),
# ]
