from django.urls import path, include
from tasks import views

urlpatterns = [
    path('all', views.get_all_tasks),
]
