from django.db import models
from authentication.models import User


class Document(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    title = models.CharField(
        max_length=255
    )

    original_pdf = models.FileField(
        upload_to="documents/originals/"
    )

    signed_pdf = models.FileField(
        upload_to="documents/signed/",
        null=True,
        blank=True,
    )

    signed = models.BooleanField(
        default=False
    )

    uploaded_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title