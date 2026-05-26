import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import api from "../../services/api";

import PDFViewer
from "../../components/pdf/PDFViewer";

type DocumentType = {

  id: number;

  title: string;

  file: string;

};

const DocumentView = () => {

  const { id } = useParams();

  const [documentData, setDocumentData] =
    useState<DocumentType | null>(
      null
    );

  useEffect(() => {

    api.get("/documents/")
      .then((response) => {

        const found =
          response.data.find(
            (doc: DocumentType) =>
              doc.id === Number(id)
          );

        setDocumentData(found);

      });

  }, [id]);

  if (!documentData) {

    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="bg-white rounded-2xl shadow-xl p-6">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">

            {documentData.title}

          </h1>

          <a
            href={`http://127.0.0.1:8000${documentData.file}`}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-5 py-3 rounded-xl"
          >

            Open PDF

          </a>

        </div>

        <PDFViewer
          fileUrl={`http://127.0.0.1:8000${documentData.file}`}
        />

      </div>

    </div>
  );
};

export default DocumentView;