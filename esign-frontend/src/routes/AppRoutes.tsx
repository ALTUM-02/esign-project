import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Upload from "../pages/Upload/Upload";
import PDFViewer from "../pages/PDFViewer/PDFViewer";
import SignaturePadPage from "../pages/Signature/SignaturePadPage";
import Sign from "../pages/Sign/Sign";
import Profile from "../pages/Profile/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/upload" element={<Upload />} />

        <Route
          path="/signature"
          element={
            <SignaturePadPage  />
          }
        />

        <Route path="/pdf-viewer" element={<PDFViewer />} />

        <Route
          path="/pdf-viewer/:id"
          element={<PDFViewer />}
        />

        <Route path="/sign" element={<Sign />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;