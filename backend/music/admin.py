from django.contrib import admin
from .models import User, Artist, Rating, Biography
# Register your models here.

admin.site.register(User)
admin.site.register(Artist)
admin.site.register(Rating)
admin.site.register(Biography)