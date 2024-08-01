from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from .throttling import ContactThrottle
from .pagination import StandardPagination
from .serializers import CategorySerilizer, ContactSerializer, ProjectSerilizer
from .models import Category, Project
from django.core.mail import send_mail
from django.conf import settings
from drf_spectacular.utils import extend_schema


# Create your views here.
class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerilizer


class ProjectListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerilizer
    pagination_class = StandardPagination
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ["categories"]
    search_fields = ['name']


class ContactView(APIView):
    throttle_classes = [ContactThrottle]
    serializer_class = ContactSerializer

    @extend_schema(
        request=ContactSerializer,
        responses={
            status.HTTP_200_OK: None,
        },
    )
    def post(self, request: Request):
        serializer = ContactSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        send_mail(
            subject=f"{serializer.validated_data["subject"]} ({serializer.validated_data["email"]})",
            message=serializer.validated_data["message"],
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_RECIPIENT],
            fail_silently=False,
        )
        return Response(data=None, status=status.HTTP_200_OK)
