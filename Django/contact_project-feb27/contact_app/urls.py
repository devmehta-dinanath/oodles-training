from django.urls import path
from .views import contact_list, contact_update, contact_delete

urlpatterns = [
    path('', contact_list, name='contact_list'),
    path('edit/<int:pk>/', contact_update, name='contact_update'),
    path('delete/<int:pk>/', contact_delete, name='contact_delete'),
]
