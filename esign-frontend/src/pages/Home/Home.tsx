import {
  useRef,
  useState,
} from "react";

import SignatureCanvas
from "react-signature-canvas";

import {
  PenTool,
  Upload,
  FileText,
  Eraser,
  Download,
  Save,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

const Home = () => {

  const signatureRef =
    useRef<any>(null);

  const [savedSignature,
    setSavedSignature] =
    useState<string | null>(null);

  const navigate = 
    useNavigate();  

  /* CLEAR SIGNATURE */

  const clearSignature = () => {

    signatureRef.current.clear();

    setSavedSignature(null);

    localStorage.removeItem(
      "signature"
    );

  };

  /* SAVE SIGNATURE */

  const saveSignature = () => {

    if (
      signatureRef.current.isEmpty()
    ) {

      alert(
        "Please draw signature first"
      );

      return;
    }

    const signatureImage =
      signatureRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");

    /* SAVE TO STATE */

    
    /* SAVE TO LOCAL STORAGE */

    localStorage.setItem(
      "signature",
      signatureImage
    );

    alert(
      "Signature saved successfully"
    );

    navigate("/saved-signature");

  };

  /* DOWNLOAD SIGNATURE */

  const downloadSignature = () => {

    if (!savedSignature) {

      alert(
        "Save signature first"
      );

      return;
    }

    const link =
      document.createElement("a");

    link.href =
      savedSignature;

    link.download =
      "signature.png";

    link.click();

  };

  return (

    <div className="min-h-screen bg-[#f4f4f4] flex flex-col">

      {/* HEADER */}

      <header className="flex justify-center pt-8 pb-5">

        <h1 className="text-5xl font-light">

          <span className="text-pink-500">
            e
          </span>

          -Sign

        </h1>

      </header>

      {/* MAIN CARD */}

      <div className="w-full flex justify-center px-6">

        <div className="bg-white border border-gray-300 rounded-3xl shadow-sm w-full max-w-7xl p-10">

          {/* SIGNATURE PAD */}

          <div className="bg-gray-50 border border-gray-300 rounded-2xl h-500px flex flex-col items-center justify-center overflow-hidden">

            <SignatureCanvas
              ref={signatureRef}
              penColor="black"
              canvasProps={{
                width: 1000,
                height: 350,
                className:
                  "rounded-xl bg-white",
              }}
            />

            <p className="text-gray-500 mt-5">

              Draw your signature here

            </p>

          </div>

          {/* ACTION BUTTONS */}

          <div className="flex flex-wrap justify-center gap-5 mt-8">

            <Link
              to="/upload"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition"
            >

              <Upload size={22} />

              Upload PDF

            </Link>

            <Link
              to="/documents"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition"
            >

              <FileText size={22} />

              My Documents

            </Link>

          </div>

          {/* PREVIEW SAVED SIGNATURE */}

          {savedSignature && (

            <div className="mt-10 flex flex-col items-center">

              <h2 className="text-2xl font-bold mb-4">

                Saved Signature

              </h2>

              <img
                src={savedSignature}
                alt="Saved Signature"
                className="border rounded-xl bg-white p-3 shadow-md"
              />

            </div>

          )}

        </div>

      </div>

      {/* FLOATING TOOLBAR */}

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#dcdcdc] px-6 py-4 rounded-2xl shadow-xl flex items-center gap-6">

        {/* CLEAR */}

        <button
          onClick={clearSignature}
          className="bg-white hover:bg-gray-100 p-4 rounded-xl transition"
        >

          <Eraser size={22} />

        </button>

        <div className="w-px h-8 bg-gray-400"></div>

        {/* PEN */}

        <button
          className="bg-black text-white p-4 rounded-xl"
        >

          <PenTool size={22} />

        </button>

        <div className="w-px h-8 bg-gray-400"></div>

        {/* SAVE */}

        <button
          onClick={saveSignature}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition"
        >

          <Save size={22} />

        </button>

        <div className="w-px h-8 bg-gray-400"></div>

        {/* DOWNLOAD */}

        <button
          onClick={downloadSignature}
          className="bg-white hover:bg-gray-100 p-4 rounded-xl transition"
        >

          <Download size={22} />

        </button>

      </div>

    </div>
  );
};

export default Home;