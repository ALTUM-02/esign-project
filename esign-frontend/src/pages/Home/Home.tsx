import {
  useRef,
} from "react";

import SignatureCanvas
from "react-signature-canvas";

import {
  PenTool,
  Upload,
  FileText,
  Eraser,
  Download,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

const Home = () => {

  const signatureRef =
    useRef<any>(null);

  const clearSignature = () => {

    signatureRef.current.clear();

  };

  const downloadSignature = () => {

    const image =
      signatureRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");

    const link =
      document.createElement("a");

    link.href = image;

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

          <div className="bg-gray-50 border border-gray-300 rounded-2xl h-120 flex flex-col items-center justify-center relative overflow-hidden">

      

            <div className="mt-10">

              <SignatureCanvas
                ref={signatureRef}
                penColor="black"
                canvasProps={{
                  width: 900,
                  height: 320,
                }}
              />

            </div>

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

        </div>

      </div>

      {/* FLOATING TOOLBAR */}

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#dcdcdc] px-6 py-4 rounded-2xl shadow-xl flex items-center gap-6">

        <button
          onClick={clearSignature}
          className="bg-white hover:bg-gray-100 p-4 rounded-xl transition"
        >

          <Eraser size={22} />

        </button>

        <div className="w-px h-8 bg-gray-400"></div>

        <button
          className="bg-black text-white p-4 rounded-xl"
        >

          <PenTool size={22} />

        </button>

        <div className="w-px h-8 bg-gray-400"></div>

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