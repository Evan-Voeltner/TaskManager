from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Task
from .serializers import TaskSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_tasks(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_tasks(request):

    user_tasks = Task.objects.filter(user_id=request.user.id)
    serializer = TaskSerializer(user_tasks, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
