from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('tournament/', views.show, name='show.html'),
    
    
]