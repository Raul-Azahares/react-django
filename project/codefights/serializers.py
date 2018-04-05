from rest_framework import serializers
from codefights.models import *


class ChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Challenge
        fields = ('id', 'title','author','description','points')