from rest_framework import serializers
from .models import Category, Project
from drf_recaptcha.fields import ReCaptchaV3Field


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
    recaptcha = ReCaptchaV3Field(action="contact_form", required_score=0.7)
