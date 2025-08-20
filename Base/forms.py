from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'number', 'content']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'form-control cyborg-input',
                'placeholder': 'Enter your full name',
                'required': True
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control cyborg-input',
                'placeholder': 'Enter your email address',
                'required': True
            }),
            'number': forms.TextInput(attrs={
                'class': 'form-control cyborg-input',
                'placeholder': 'Enter your phone number',
                'required': True,
                'pattern': '[0-9+\-\s\(\)]*',
                'title': 'Please enter a valid phone number'
            }),
            'content': forms.Textarea(attrs={
                'class': 'form-control cyborg-textarea',
                'placeholder': 'Enter your message here...',
                'rows': 5,
                'required': True
            })
        }
        labels = {
            'name': 'Full Name',
            'email': 'Email Address',
            'number': 'Phone Number',
            'content': 'Message'
        }
    
    def clean_name(self):
        name = self.cleaned_data.get('name')
        if len(name) < 2:
            raise forms.ValidationError('Name must be at least 2 characters long.')
        return name
    
    def clean_number(self):
        number = self.cleaned_data.get('number')
        # Remove all non-digit characters for validation
        digits_only = ''.join(filter(str.isdigit, number))
        if len(digits_only) < 10:
            raise forms.ValidationError('Please enter a valid phone number with at least 10 digits.')
        return number