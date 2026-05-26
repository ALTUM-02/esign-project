import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import api
from "../../services/api";

const Upload = () => {

  const navigate =
    useNavigate();

  const [title, setTitle] =
    useState("");

  const [file, setFile] =
    useState<File | null>(
      null
    );

  const [loading, setLoading] =
    useState(false);

  const handleUpload = async () => {

    if (!title) {

      alert(
        "Enter document title"
      );

      return;
    }

    if (!file) {

      alert(
        "Choose PDF file"
      );

      return;
    }

    try {

      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "title",
        title
      );

      /* IMPORTANT */
      formData.append(
        "file",
        file
      );

      const response =
        await api.post(
          "/documents/upload/",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      console.log(
        response.data
      );

      alert(
        "PDF uploaded successfully"
      );

      /* REDIRECT TO VIEWER */

      navigate(
        `/documents/${response.data.id}`
      );

    } catch (error: any) {

      console.error(
        error.response?.data
      );

      alert(
        "Upload failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold mb-6">

          Upload PDF

        </h1>

        <input
          type="text"
          placeholder="Document title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="border w-full p-3 rounded-lg mb-5"
        />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => {

            if (e.target.files) {

              setFile(
                e.target.files[0]
              );

            }

          }}
          className="mb-5"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full"
        >

          {loading
            ? "Uploading..."
            : "Upload PDF"}

        </button>

      </div>

    </div>
  );
};

export default Upload;