from rest_framework.serializers import ModelSerializer
from .models import Category, Project


class CategorySerilizer(ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class ProjectSerilizer(ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"
