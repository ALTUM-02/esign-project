import {
  Document,
  Page,
  pdfjs,
} from "react-pdf";

import {
  useState,
} from "react";

import "react-pdf/dist/Page/AnnotationLayer.css";

import "react-pdf/dist/Page/TextLayer.css";

/* PDF WORKER */

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Props = {

  fileUrl?: string;

};

const PDFViewer = ({
  fileUrl = "",
}: Props) => {

  const [numPages, setNumPages] =
    useState<number>(0);

  const [loading, setLoading] =
    useState(true);

  const onDocumentLoadSuccess = ({
    numPages,
  }: {
    numPages: number;
  }) => {

    setNumPages(numPages);

    setLoading(false);

  };

  return (

    <div className="flex flex-col items-center w-full">

      {loading && (

        <p className="text-gray-500 mb-4">

          Loading PDF...

        </p>

      )}

      <Document
        file={fileUrl}
        onLoadSuccess={
          onDocumentLoadSuccess
        }
        onLoadError={(error) => {

          console.error(
            "PDF Error:",
            error
          );

        }}
      >

        {Array.from(
          new Array(numPages),
          (_, index) => (

            <div
              key={`page_${index + 1}`}
              className="mb-6 shadow-lg"
            >

              <Page
                pageNumber={
                  index + 1
                }
                width={800}
              />

            </div>

          )
        )}

      </Document>

    </div>
  );
};

export default PDFViewer;