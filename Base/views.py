from django.shortcuts import render
from django.http import HttpResponse

#create your view here


def home(request):
    return render(request, 'home.html')
