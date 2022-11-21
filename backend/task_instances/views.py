from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import TaskInstance
from .serializers import TaskInstanceSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_task_instances(request):
    tasks = TaskInstance.objects.all()
    serializer = TaskInstanceSerializer(tasks, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_task_instances(request):
    if request.method == 'GET':
        print(request)
        user_task_instances = TaskInstance.objects.filter(user_id=request.user.id)
        serializer = TaskInstanceSerializer(user_task_instances, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = TaskInstanceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def change_user_task_instances(request, pk):
    task_instance = get_object_or_404(TaskInstance, pk=pk)
    if request.method == 'PUT':
        serializer = TaskInstanceSerializer(task_instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        task_instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)