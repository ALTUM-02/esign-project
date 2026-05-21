import {
  useEffect,
  useState,
} from "react";

import {
  FileText,
  PenTool,
  Upload,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";

import api from "../../services/api";

type UserType = {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
};

const Dashboard = () => {

  const [user, setUser] =
    useState<UserType | null>(
      null
    );

  useEffect(() => {

    api.get("/me/")
      .then((response) => {

        setUser(response.data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (

    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}

      <aside className="w-64 bg-blue-900 text-white p-6 hidden md:flex flex-col">

        <h1 className="text-3xl font-bold mb-10">

          E-Sign

        </h1>

        <nav className="flex flex-col gap-4">

          <Link
            to="/dashboard"
            className="hover:bg-blue-700 p-3 rounded-lg"
          >
            Dashboard
          </Link>

          <Link
            to="/upload"
            className="hover:bg-blue-700 p-3 rounded-lg"
          >
            Upload PDF
          </Link>

          <Link
            to="/signature"
            className="hover:bg-blue-700 p-3 rounded-lg"
          >
            Signature Pad
          </Link>

          <Link
            to="/sign"
            className="hover:bg-blue-700 p-3 rounded-lg"
          >
            Sign Document
          </Link>

        </nav>

      </aside>

      {/* MAIN */}

      <main className="flex-1 p-6">

        {/* HEADER */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-4xl font-bold text-gray-800">

              Dashboard

            </h1>

            <p className="text-gray-500">

              Welcome to E-Sign System

            </p>

          </div>

          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">

            <User size={28} />

            <div>

              <p className="font-bold">

                {user?.username}

              </p>

              <p className="text-sm text-gray-500">

                {user?.email}

              </p>

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">

                  Uploaded PDFs

                </p>

                <h2 className="text-3xl font-bold mt-2">

                  12

                </h2>

              </div>

              <FileText
                size={40}
                className="text-blue-600"
              />

            </div>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">

                  Signed Documents

                </p>

                <h2 className="text-3xl font-bold mt-2">

                  8

                </h2>

              </div>

              <PenTool
                size={40}
                className="text-green-600"
              />

            </div>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">

                  Pending Files

                </p>

                <h2 className="text-3xl font-bold mt-2">

                  4

                </h2>

              </div>

              <Upload
                size={40}
                className="text-purple-600"
              />

            </div>

          </div>

        </div>

        {/* QUICK ACTIONS */}

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-2xl font-bold mb-5">

            Quick Actions

          </h2>

          <div className="flex gap-4 flex-wrap">

            <Link
              to="/upload"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
            >
              Upload PDF
            </Link>

            <Link
              to="/signature"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl"
            >
              Create Signature
            </Link>

            <Link
              to="/sign"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl"
            >
              Sign Document
            </Link>

          </div>

        </div>

      </main>

    </div>
  );
};

export default 