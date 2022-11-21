from rest_framework import serializers
from .models import TaskInstance

class TaskInstanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskInstance
        fields = ['id', 'task_id', 'name', 'date_to_be_completed', 'is_completed']

    task_id = serializers.IntegerField(write_only=True)