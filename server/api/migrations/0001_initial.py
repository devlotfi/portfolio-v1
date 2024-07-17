# Generated by Django 5.0.7 on 2024-07-17 09:58

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=512)),
                ('description', models.TextField()),
                ('icon', models.URLField()),
                ('thumbnail', models.URLField()),
                ('repository', models.URLField(blank=True, null=True)),
                ('deployment', models.URLField(blank=True, null=True)),
                ('categories', models.ManyToManyField(related_name='categories', to='api.category')),
            ],
        ),
    ]
