from django.urls import path

from . import views

urlpatterns = [
    # path('', board.views.mainPage)
    path('', views.mainPage, name='mainPage'),
    path('visitor', views.visitorPage, name='visitorPage')
]
