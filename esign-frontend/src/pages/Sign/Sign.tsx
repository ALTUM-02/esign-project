import { PDFDocument }
from "pdf-lib";

const Sign = () => {

  const signPDF = async (
    file: File
  ) => {

    const existingPdfBytes =
      await file.arrayBuffer();

    const pdfDoc =
      await PDFDocument.load(
        existingPdfBytes
      );

    const pages =
      pdfDoc.getPages();

    const firstPage =
      pages[0];

    const signature =
      localStorage.getItem(
        "signature"
      );

    if (!signature) {
      alert("No signature found");
      return;
    }

    const signatureImage =
      await pdfDoc.embedPng(signature);

    firstPage.drawImage(
      signatureImage,
      {
        x: 50,
        y: 50,
        width: 150,
        height: 80,
      }
    );

    const pdfBytes =
      await pdfDoc.save();

    const pdfArray = Uint8Array.from(pdfBytes);

    const blob = new Blob(
      [pdfArray],
      {
        type: "application/pdf",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "signed-document.pdf";

    link.click();
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        Sign PDF
      </h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {

          if (e.target.files) {

            signPDF(
              e.target.files[0]
            );

          }
        }}
      />

    </div>
  );
};

export default Sign;