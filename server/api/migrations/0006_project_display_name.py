# Generated by Django 5.0.7 on 2024-08-02 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_rename_name_project_repository_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='display_name',
            field=models.CharField(max_length=512, null=True),
        ),
    ]
