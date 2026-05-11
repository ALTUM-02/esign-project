import { Document, Page }
from "react-pdf";

import { useState } from "react";

type Props = {
  fileUrl?: string;
};

const PDFViewer = ({
  fileUrl = "",
}: Props) => {

  const [numPages, setNumPages] =
    useState<number>();

  return (
    <div>

      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) =>
          setNumPages(numPages)
        }
      >

        {Array.from(
          new Array(numPages),
          (_, index) => (
            <Page
              key={index}
              pageNumber={index + 1}
            />
          )
        )}

      </Document>

    </div>
  );
};

export default PDFViewer;