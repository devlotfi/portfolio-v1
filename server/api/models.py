import uuid
from django.db import models


# Create your models here.
class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=256)

    def __str__(self) -> str:
        return self.name


class Project(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    categories = models.ManyToManyField(Category, related_name="categories")
    name = models.CharField(max_length=512)
    description = models.TextField()
    icon = models.URLField()
    thumbnail = models.URLField()
    repository = models.URLField()
    deployment = models.URLField(null=True, blank=True)

    def __str__(self) -> str:
        return self.name
