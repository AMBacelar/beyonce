# Generated by Django 4.2.5 on 2024-04-02 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('efitterbackend', '0002_stylegurupersona_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stylegurupersona',
            name='link',
            field=models.URLField(default='www.example.com', max_length=500),
        ),
    ]
