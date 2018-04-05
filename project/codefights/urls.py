from django.urls import path
from . import views

urlpatterns = [
    path('api/book/', views.LeadListCreate.as_view()),
    path('api/book/detail/$', views.BookDetail.as_view()),
]