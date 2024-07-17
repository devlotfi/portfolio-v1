from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from .throttling import ContactThrottle
from .pagination import StandardPagination
from .serializers import CategorySerilizer, ProjectSerilizer
from .models import Category, Project


# Create your views here.
class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerilizer


class ProjectListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerilizer
    pagination_class = StandardPagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["categories"]


class ContactView(APIView):
    throttle_classes = [ContactThrottle]

    def post(self, request: Request):
        return Response(data={}, status=status.HTTP_200_OK)
