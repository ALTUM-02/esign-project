import api from "./api";

export const uploadDocument = async (
  formData: FormData
) => {
  const response = await api.post(
    "/documents/upload",
    formData
  );

  return response.data;
};

export const saveSignedPDF = async (
  documentId: number,
  file: Blob
) => {
  const formData = new FormData();

  formData.append(
    "signed_pdf",
    file,
    "signed-document.pdf"
  );

  const response = await api.post(
    `/documents/${documentId}/save-signed/`,
    formData
  );

  return response.data;
};