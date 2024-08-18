from django.urls import path
from .views import CategoryListView, ProjectListView

urlpatterns = [
    path("categories/", CategoryListView.as_view()),
    path("projects/", ProjectListView.as_view()),
]
