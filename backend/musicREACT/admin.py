from django.contrib import admin
from .models import music

# Register your models here.
class MusicREACTAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'rating')

admin.site.register(music, MusicREACTAdmin)