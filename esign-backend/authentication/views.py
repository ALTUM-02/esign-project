from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    UserSerializer,
)

from rest_framework_simplejwt.tokens import RefreshToken

@api_view(["POST"])
def register_user(request):

    serializer = RegisterSerializer(
        data=request.data
    )

    if serializer.is_valid():

        user = serializer.save()

        refresh = RefreshToken.for_user(user)

        return Response({
            "message": "User registered successfully",
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
            },
        })

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST,
    )



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user_profile(request):

    serializer = UserSerializer(request.user)

    return Response(serializer.data)


@api_view(["GET"])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def example_view(request, format=None):
    content = {
        'user': str(request.user),
        'auth': str(request.auth),
    }
    return Response(content)


@api_view(["POST"])
def login_user(request):

    serializer = LoginSerializer(
        data=request.data
    )

    if serializer.is_valid():

        user = serializer.validated_data

        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user": {
                    "username": user.username,
                    "email": user.email,
                },
            }
        )

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST,
    )
