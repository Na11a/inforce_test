# Generated by Django 4.0 on 2021-12-15 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizza', '0004_alter_product_count_alter_product_height_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image_url',
            field=models.TextField(max_length=200, null=True),
        ),
    ]
