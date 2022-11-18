from rest_framework import serializers
from .models import TaskInstance

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskInstance
        fields = ['id', 'task', 'name', 'date_to_be_completed', 'is_completed']
