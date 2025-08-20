
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Contact
from .forms import ContactForm

def home(request):
    """Display the contact form and handle form submissions"""
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Save the contact form data
            contact = form.save()
            messages.success(request, 'Your message has been sent successfully! We will get back to you soon.')
            return redirect('home')  # Redirect to prevent re-submission
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = ContactForm()
    
    return render(request, 'home.html', {'form': form})

def contact_success(request):
    """Success page after form submission"""
    return render(request, 'contact_success.html')



# from pyexpat.errors import messages
# from django.shortcuts import render
# from django.http import HttpResponse
# from Base import models
# from Base.models import Contact


# def home(request):
#     return render(request, 'home.html')

# def contact(request):
#     if request.method == "POST":
#         print('post')
#         name = request.POST.get('name')
#         email = request.POST.get('email')
#         content = request.POST.get('content')
#         number = request.POST.get('number')
#         print(name, email, content, number)
        
#         if len(name)>1 and len(name)<30:
#             pass
#         else:
#             messages.error(request, 'name should be greater than 1 and less than 30')
#             return render(request, 'home.html')
        
#         if len(email)>1 and len(email)<30:
#             pass
#         else: 
#             messages.error(request, 'Invalid email try again')
#             return render(request, 'home.html')

#         if len(number)>1 and len(number)<15:
#             pass
#         else:
#             messages.error(request, 'Invalid number try again')
#             return render(request, 'home.html')
        
#         ins = models.Contact(name=name,email=email, content=content, number=number)
#         ins.save()
#         messages.success(request, 'Your message has been sent successfully')
#         print("Data has been save to Database")
#         print("The request is no pass")

#     return render(request, 'home.html')