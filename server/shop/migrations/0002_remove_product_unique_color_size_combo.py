# Generated by Django 5.0.2 on 2024-03-02 17:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("shop", "0001_initial"),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name="product",
            name="unique_color_size_combo",
        ),
    ]