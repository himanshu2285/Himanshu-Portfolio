from pyexpat.errors import messages
from django.shortcuts import render
from django.http import HttpResponse

from Base import models
from Base.models import Contact

#create your view here

# def home(request):
#     return render(request, 'home.html')

def contact(request):
    if request.method == 'POST':
        print('post')
        name = request.POST.get('name')
        email = request.POST.get('email')
        content = request.POST.get('content')
        number = request.POST.get('number')
        print(name, email, content, number)
        
        if len(name)>1 and len(name)<30:
            pass
        else:
            messages.error(request, 'name should be greater than 1 and less than 30')
            return render(request, 'home.html')
        
        if len(email)>1 and len(email)<30:
            pass
        else:
            messages.error(request, 'Invalid email try again')
            return render(request, 'home.html')

        if len(number)>2 and len(number)<15:
            pass
        else:
            messages.error(request, 'Invalid number try again')
            return render(request, 'home.html')
        
        ins = models.Contact(name=name,email=email, content=content, number=number)
        ins.save()
        messages.success(request, 'Your message has been sent successfully')
        print("Data has been save to Database")
        print("The request is no pass")

    return render(request, 'home.html')