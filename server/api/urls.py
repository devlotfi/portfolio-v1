from django.contrib import admin
from django.urls import path
from .views import CategoryListView, ContactView, ProjectListView

urlpatterns = [
    path("categories/", CategoryListView.as_view()),
    path("projects/", ProjectListView.as_view()),
    path("contact/", ContactView.as_view()),
]
