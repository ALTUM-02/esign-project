import {
  FileText,
  Upload,
  PenTool,
  CheckCircle,
  Clock,
  User,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* SIDEBAR */}

      <aside className="w-72 bg-slate-900 text-white p-6">

        <h1 className="text-3xl font-bold mb-10">
          E-Sign
        </h1>

        <nav className="space-y-4">

          <a
            href="/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FileText size={20} />
            Dashboard
          </a>

          <a
            href="/upload"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <Upload size={20} />
            Upload PDF
          </a>

          <a
            href="/"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <PenTool size={20} />
            Signature Pad
          </a>

        </nav>

      </aside>

      {/* MAIN */}

      <main className="flex-1 p-8">

        {/* HEADER */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-500">
              Manage your documents and signatures
            </p>

          </div>

          <div className="bg-white px-6 py-4 rounded-2xl shadow flex items-center gap-4">

            <User />

            <div>

              <h3 className="font-bold">
                Martin
              </h3>

              <p className="text-gray-500 text-sm">
                User Account
              </p>

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-linear-to-r from-blue-500 to-blue-700 text-white p-6 rounded-3xl shadow-lg">

            <FileText size={40} />

            <h2 className="text-4xl font-bold mt-4">
              12
            </h2>

            <p>
              Uploaded PDFs
            </p>

          </div>

          <div className="bg-linear-to-r from-green-500 to-green-700 text-white p-6 rounded-3xl shadow-lg">

            <CheckCircle size={40} />

            <h2 className="text-4xl font-bold mt-4">
              8
            </h2>

            <p>
              Signed Documents
            </p>

          </div>

          <div className="bg-linear-to-r from-purple-500 to-purple-700 text-white p-6 rounded-3xl shadow-lg">

            <Clock size={40} />

            <h2 className="text-4xl font-bold mt-4">
              4
            </h2>

            <p>
              Pending Documents
            </p>

          </div>

        </div>

        {/* QUICK ACTIONS */}

        <div className="bg-white p-6 rounded-3xl shadow mb-8">

          <h2 className="text-2xl font-bold mb-5">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <a
              href="/upload"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Upload PDF
            </a>

            <a
              href="/"
              className="bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              Create Signature
            </a>

            <a
              href="/documents"
              className="bg-purple-600 text-white px-6 py-3 rounded-xl"
            >
              View Documents
            </a>

          </div>

        </div>

        {/* DOCUMENT TABLE */}

        <div className="bg-white p-6 rounded-3xl shadow mb-8">

          <h2 className="text-2xl font-bold mb-5">
            Recent Documents
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  Document
                </th>

                <th className="text-left py-3">
                  Status
                </th>

                <th className="text-left py-3">
                  Date
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-3">
                  Contract.pdf
                </td>

                <td className="text-green-600">
                  Signed
                </td>

                <td>
                  30 May 2026
                </td>

              </tr>

              <tr>

                <td className="py-3">
                  Agreement.pdf
                </td>

                <td className="text-yellow-600">
                  Pending
                </td>

                <td>
                  29 May 2026
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* ACTIVITY */}

        <div className="bg-white p-6 rounded-3xl shadow">

          <h2 className="text-2xl font-bold mb-5">
            Recent Activity
          </h2>

          <ul className="space-y-3">

            <li>
              Uploaded Contract.pdf
            </li>

            <li>
              Signed Agreement.pdf
            </li>

            <li>
              Downloaded Signed Document
            </li>

          </ul>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;