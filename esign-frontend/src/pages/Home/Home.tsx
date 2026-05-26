import {
  PenTool,
  Upload,
  FileText,
  Download,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

const Home = () => {

  return (

    <div className="min-h-screen bg-[#f5f5f5]">

      {/* HEADER */}

      <header className="w-full flex justify-between items-center px-10 py-6">

        <div className="flex items-center gap-2">

          <span className="text-pink-500 text-5xl font-light">
            e
          </span>

          <span className="text-5xl font-light text-black">
            -Sign
          </span>

        </div>

        <div className="flex gap-4">

          <Link
            to="/login"
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Register
          </Link>

        </div>

      </header>

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="border border-gray-400 rounded-2xl bg-white h-650px">

          {/* PDF VIEW AREA */}

          <div className="w-full h-full flex items-center justify-center">

            <div className="bg-gray-100 w-[90%] h-[85%] rounded-xl border border-gray-300 flex items-center justify-center">

              <div className="text-center">

                <FileText
                  size={90}
                  className="mx-auto text-gray-400"
                />

                <h1 className="text-4xl font-bold mt-6 text-gray-700">

                  E-Signature Platform

                </h1>

                <p className="text-gray-500 mt-4 text-lg">

                  Upload, Sign and Download PDFs Easily

                </p>

                <div className="flex gap-5 justify-center mt-10">

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

          </div>

          {/* FLOATING TOOLBAR */}

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#d9d9d9] shadow-xl rounded-2xl px-6 py-4 flex items-center gap-6">

            <button className="bg-white p-3 rounded-lg hover:bg-gray-100">

              <Upload size={20} />

            </button>

            <div className="w-px h-8 bg-gray-400"></div>

            <button className="bg-black text-white p-3 rounded-lg">

              <PenTool size={20} />

            </button>

            <div className="w-px h-8 bg-gray-400"></div>

            <button className="bg-white p-3 rounded-lg hover:bg-gray-100">

              <Download size={20} />

            </button>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto mt-20 px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <Upload
              size={40}
              className="text-pink-500"
            />

            <h2 className="text-2xl font-bold mt-5">

              Upload PDFs

            </h2>

  

          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <PenTool
              size={40}
              className="text-pink-500"
            />

            <h2 className="text-2xl font-bold mt-5">

              Digital Signatures

            </h2>

            <p className="text-gray-500 mt-3">

              Place signatures anywhere on PDF pages instantly.

            </p>

          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <Download
              size={40}
              className="text-pink-500"
            />

            <h2 className="text-2xl font-bold mt-5">

              Download & Share

            </h2>

            <p className="text-gray-500 mt-3">

              Export signed PDFs and share them securely.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;