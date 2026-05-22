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
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Props = {

  fileUrl?: string;

};

const PDFViewer = ({
  fileUrl = "",
}: Props) => {

  const [numPages, setNumPages] =
    useState<number>(0);

  const onDocumentLoadSuccess = ({
    numPages,
  }: {
    numPages: number;
  }) => {

    setNumPages(numPages);

  };

  return (

    <div className="flex flex-col items-center">

      <Document
        file={fileUrl}
        onLoadSuccess={
          onDocumentLoadSuccess
        }
      >

        {Array.from(
          new Array(numPages),
          (_, index) => (

            <div
              key={index}
              className="mb-5"
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