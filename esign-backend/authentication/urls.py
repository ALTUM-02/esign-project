from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from .views import (
    register_user,
    login_user,
    user_profile,
    example_view,
)

urlpatterns = [
    path(
        "register/",
        register_user
    ),

    path(
        "login/",
        login_user
    ),
    
    path(
        "token/",
        obtain_auth_token
    ),
    
    path(
        "profile/",
        user_profile
    ),
    
    path(
        "example/",
        example_view
    )
]