import {
  useEffect,
  useState,
} from "react";

import api from "../../services/api";

import {
  Link,
} from "react-router-dom";

type DocumentType = {

  id: number;

  title: string;

  file: string;

  signed_pdf: string;

  signed: boolean;

};

const Documents = () => {

  const [documents, setDocuments] =
    useState<DocumentType[]>([]);

  useEffect(() => {

    api.get("/documents/")
      .then((response) => {

        setDocuments(
          response.data
        );

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">

        My Documents

      </h1>

      <div className="grid gap-4">

        {documents.map((doc) => (

          <div
            key={doc.id}
            className="bg-white shadow rounded-xl p-5"
          >

            <h2 className="text-xl font-bold">

              {doc.title}

            </h2>

            <p className="text-gray-500 mb-4">

              Status:
              {" "}
              {doc.signed
                ? "Signed"
                : "Pending"}
            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href={`http://127.0.0.1:8000${doc.file}`}
                target="_blank"

              {doc.signed_pdf && (

                <a
                  href={`http://127.0.0.1:8000${doc.signed_pdf}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >

                  Open Signed PDF

                </a>

              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Documents;