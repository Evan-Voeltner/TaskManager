from django.db import models
from authentication.models import User

# Create your models here.

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    is_recurring = models.BooleanField()
    recurring_pattern = models.JSONField()
    importance = models.IntegerField()

    
