from django.db import models

# Create your models here.
class music(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    rating = models.FloatField()

    def __str__(self) -> str:
        return self.title