from django.shortcuts import render
from rest_framework import status
from rest_framework import viewsets, filters
from rest_framework.response import Response
from rest_framework.views import APIView

from codefights.models import Challenge
from codefights.serializers import ChallengeSerializer
from rest_framework import generics



class LeadListCreate(generics.ListCreateAPIView):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer



class BookDetail(APIView):
    serializer_class = ChallengeSerializer

    def get(self, request, *args, **kw):
        try:
            pk = self.request.query_params.get('pk', None)

            result = Challenge.objects.filter(id=pk)
        except Exception as e:
            result = "Debe enviar los parámetros correctamente.Error: ".decode('utf-8') + str(e)
        response = Response(result, status=status.HTTP_200_OK)
        return response