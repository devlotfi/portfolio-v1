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
