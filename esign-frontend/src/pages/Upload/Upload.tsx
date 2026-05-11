import { useState } from "react";
import api from "../../services/api";

const Upload = () => {

  const [title, setTitle] =
    useState("");

  const [file, setFile] =
    useState<File | null>(null);

  const handleUpload = async () => {

    if (!file) return;

    const formData = new FormData();

    formData.append("title", title);

    formData.append("pdf_file", file);

    try {

      const response = await api.post(
        "/documents/upload/",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      alert("PDF Uploaded");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        Upload PDF
      </h1>

      <input
        type="text"
        placeholder="Document title"
        className="border p-3 w-full mb-4"
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-5 py-3 rounded mt-5"
      >
        Upload
      </button>
    </div>
  );
};

export default Upload;