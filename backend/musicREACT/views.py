from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MusicSerializer
from .models import music

# Create your views here.
class MusicView(viewsets.ModelViewSet):
    serializer_class = MusicSerializer
    queryset = music.objects.all()