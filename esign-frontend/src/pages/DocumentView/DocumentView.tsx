import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import api from "../../services/api";

import PDFViewer
from "../../components/pdf/PDFViewer";

type DocumentType = {

  id: number;

  title: string;

  file: string;

  signed_pdf: string;

  signed: boolean;

};

const DocumentView = () => {

  const { id } = useParams();

  const [documentData, setDocumentData] =
    useState<DocumentType | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    api.get("/documents/")
      .then((response) => {

        const found =
          response.data.find(
            (doc: DocumentType) =>
              doc.id === Number(id)
          );

        setDocumentData(found);

      })
      .catch((error) => {

        console.error(error);

      })
      .finally(() => {

        setLoading(false);

      });

  }, [id]);

  if (loading) {

    return (

      <div className="p-10">

        Loading document...

      </div>

    );
  }

  if (!documentData) {

    return (

      <div className="p-10">

        Document not found

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="bg-white shadow p-4 flex justify-between items-center">

        <div>

          <h1 className="text-2xl font-bold">

            {documentData.title}

          </h1>

          <p className="text-gray-500">

            Status:
            {" "}

            {documentData.signed
              ? "Signed"
              : "Pending"}

          </p>

        </div>

        <div className="flex gap-3">

          <Link
            to="/documents"
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >

            Back

          </Link>

          <a
            href={`http://127.0.0.1:8000${documentData.file}`}
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >

            Download

          </a>

        </div>

      </div>

      <div className="p-6 flex justify-center">

        <PDFViewer
          fileUrl={`http://127.0.0.1:8000${documentData.file}`}
        />

      </div>

    </div>
  );
};

export default DocumentView;