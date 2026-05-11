import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-10">
        Dashboard
      </h2>

      <div className="flex flex-col gap-5">
        <Link to="/dashboard">Overview</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/sign">Sign</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Sidebar;