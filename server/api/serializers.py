from rest_framework import serializers
from .models import Category, Project


class CategorySerilizer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class ProjectSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class ContactSerializer(serializers.Serializer):
    email = serializers.EmailField()
    subject = serializers.CharField(max_length=512)
    message = serializers.CharField(max_length=2048)
