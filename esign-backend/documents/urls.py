from django.urls import path

from .views import (
    upload_document,
    get_documents,
    save_signed_pdf,
    send_signed_pdf,
)

urlpatterns = [

    path(
        "upload/",
        upload_document
    ),

    path(
        "",
        get_documents
    ),

    path(
        "<int:pk>/save-signed/",
        save_signed_pdf
    ),

    path(
        "<int:pk>/send-email/",
        send_signed_pdf
    ),
]