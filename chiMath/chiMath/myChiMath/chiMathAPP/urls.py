from django.urls import path
from . import views

urlpatterns = [
    # other URL routes here...
    path('', views.homePage, name='homePage'),
    path('chiMain/', views.chiMain, name='chiMain'),
    path('chiStrokes/', views.chiStrokes, name='chiStrokes'),
    path('mathClock/', views.mathClock, name='mathClock')
    
]
