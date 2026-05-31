from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Document(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    title = models.CharField(
        max_length=255
    )

    file = models.FileField(
        upload_to="documents/", null=True, blank=True
    )

    uploaded_at = models.DateTimeField(
        auto_now_add=True
    )

    signed_file = models.FileField(
        upload_to="signed/",
        null=True,
        blank=True
    )
    signed = models.BooleanField(
        default=False
    )

    def __str__(self):

        return self.title