from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import (
    RegisterSerializer,
    LoginSerializer,
)



@api_view(["POST"])
def register_user(request):

    serializer = RegisterSerializer(
        data=request.data
    )

    if serializer.is_valid():

        user = serializer.save()

        refresh = RefreshToken.for_user(
            user
        )

        return Response({

            "message": "User registered successfully",

            "refresh": str(refresh),

            "access": str(
                refresh.access_token
            ),
        })

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST,
    )


@api_view(["POST"])
def login_user(request):

    serializer = LoginSerializer(
        data=request.data
    )

    if serializer.is_valid():

        user = serializer.validated_data[
            "user"
        ]

        refresh = RefreshToken.for_user(
            user
        )

        return Response({

            "refresh": str(refresh),

            "access": str(
                refresh.access_token
            ),

            "user": {

                "id": user.id,
                "username": user.username,
                "email": user.email,

            }
        })

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST,
    )
    
