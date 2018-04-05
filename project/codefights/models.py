from django.db import models

class Challenge(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    points = models.IntegerField()
