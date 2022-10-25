from django.urls import path
from . import views

urlpatterns = [
    path(r'', TournamentView.as_view(), name='index'),
    
]