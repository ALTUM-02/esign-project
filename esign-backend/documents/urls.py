from django.urls import path

from .views import (
    upload_document,
    save_signed_pdf,
    send_signed_pdf,
)

urlpatterns = [

    path(
        'upload/',
        upload_document
    ),

    path(
        'save/',
        save_signed_pdf
    ),

    path(
        'send/',
        send_signed_pdf
    ),
]