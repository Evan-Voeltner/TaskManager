from django.db import models
from tasks.models import Task

# Create your models here.

class TaskInstance(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    date_to_be_completed = models.DateField()
    is_completed = models.BooleanField()

    
