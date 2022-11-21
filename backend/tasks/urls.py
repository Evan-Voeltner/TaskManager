from django.urls import path, include
from tasks import views

urlpatterns = [
    path('all/', views.get_all_tasks),
    path('userTasks/', views.user_tasks),
    path('userTasks/<int:pk>/', views.change_user_tasks),
]
