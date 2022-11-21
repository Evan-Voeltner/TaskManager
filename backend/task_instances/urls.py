from django.urls import path, include
from task_instances import views

urlpatterns = [
    path('all/', views.get_all_task_instances),
    path('userTaskInstances/', views.user_task_instances),
    path('userTaskInstances/<int:pk>/', views.change_user_task_instances),
]
