from django.db import models
from tasks.models import Task
from authentication.models import User

# Create your models here.

class TaskInstance(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    date_to_be_completed = models.DateField()
    importance = models.IntegerField()
    recurring_pattern = models.IntegerField()
    is_completed = models.BooleanField()

    
