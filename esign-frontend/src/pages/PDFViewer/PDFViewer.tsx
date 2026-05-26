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

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Props = {

  fileUrl: string;

};

const PDFViewer = ({
  fileUrl,
}: Props) => {

  const [numPages, setNumPages] =
    useState<number>(0);

  const [loading, setLoading] =
    useState(true);

  const onLoadSuccess = ({
    numPages,
  }: {
    numPages: number;
  }) => {

    setNumPages(numPages);

    setLoading(false);

  };

  return (

    <div className="w-full flex flex-col items-center">

      {loading && (

        <p className="mb-4 text-gray-500">

          Loading PDF...

        </p>

      )}

      <Document
        file={fileUrl}
        onLoadSuccess={onLoadSuccess}
        onLoadError={(error) => {

          console.error(
            "PDF ERROR:",
            error
          );

        }}
      >

        {Array.from(
          new Array(numPages),
          (_, index) => (

            <div
              key={index}
              className="mb-6 shadow-xl"
            >

              <Page
                pageNumber={index + 1}
                width={900}
              />

            </div>

          )
        )}

      </Document>

    </div>
  );
};

export default PDFViewer;