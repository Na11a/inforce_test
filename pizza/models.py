from django.db import models
import datetime

class Product(models.Model):
    image_url = models.TextField(max_length=200,null=True)
    name = models.CharField(max_length=50)
    count = models.IntegerField(null=True,blank=True)
    width = models.IntegerField(null=True,blank=True)
    height = models.IntegerField(null=True,blank=True)
    weight = models.IntegerField(null=True,blank=True)
    price = models.IntegerField(null=True,blank=True)


class Comment(models.Model):
    description = models.TextField(max_length=200)
    date = models.DateField(null=True,blank=True,default=datetime.datetime.now())
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
