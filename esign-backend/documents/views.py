from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import (
    api_view,
    permission_classes,
)

from rest_framework.permissions import (
    IsAuthenticated,
)

from .serializers import (
    DocumentSerializer,
)

from .models import Document
from authentication.models import AuditTrail

from django.core.mail import EmailMessage


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def upload_document(request):

    serializer = DocumentSerializer(
        data=request.data
    )

    if serializer.is_valid():

        document = serializer.save(
            user=request.user
        )

        AuditTrail.objects.create(
            user=request.user,
            action=f"Uploaded PDF: {document.title}"
        )

        return Response(serializer.data)

    return Response(
        serializer.errors,
        status=400,
    )


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def save_signed_pdf(request, pk):

    try:

        document = Document.objects.get(
            id=pk,
            user=request.user
        )

        signed_pdf = request.FILES.get(
            "signed_pdf"
        )

        document.signed_pdf = signed_pdf

        document.signed = True

        document.save()

        AuditTrail.objects.create(
            user=request.user,
            action=f"Saved signed PDF for document: {document.title}"
        )

        return Response({
            "message": "Signed PDF saved"
        })

    except Document.DoesNotExist:

        return Response(
            {
                "error": "Document not found"
            },
            status=404,
        )


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def send_signed_pdf(request, pk):

    try:
        document = Document.objects.get(
            id=pk,
            user=request.user
        )

        email = request.data.get("email")

        if not email:
            return Response(
                {"error": "Email address is required"},
                status=400
            )

        if not document.signed_pdf:
            return Response(
                {"error": "No signed PDF available"},
                status=400
            )

        mail = EmailMessage(
            subject="Signed PDF",
            body="Attached signed PDF",
            to=[email],
        )

        mail.attach_file(
            document.signed_pdf.path
        )

        mail.send()

        AuditTrail.objects.create(
            user=request.user,
            action=f"Sent signed PDF email for document: {document.title} to {email}"
        )

        return Response({
            "message": "Email sent"
        })

    except Document.DoesNotExist:
        return Response(
            {
                "error": "Document not found"
            },
            status=404,
        )

    except Exception as e:
        return Response(
            {
                "error": f"Failed to send email: {str(e)}"
            },
            status=500,
        )