from rest_framework import viewsets
from .serializers import *
from .models import *
from rest_framework import filters

class ChallengeViewSet(viewsets.ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer
    filter_backends = (filters.SearchFilter, filters.OrderingFilter,)
    filter_fields = ('id', 'title','author','description','points')
    search_fields = ('id', 'title','author','description','points')
    ordering_fields = ('id', 'title','author','description','points')
    ordering = ('id', 'title','author','description','points')



