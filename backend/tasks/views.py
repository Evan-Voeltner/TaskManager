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

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_tasks(request):
    if request.method == 'GET':
        user_tasks = Task.objects.filter(user_id=request.user.id)
        serializer = TaskSerializer(user_tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        print(request.user)
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def change_user_tasks(request, pk):
    task = get_object_or_404(Task, pk=pk)
    if request.method == 'PUT':
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
