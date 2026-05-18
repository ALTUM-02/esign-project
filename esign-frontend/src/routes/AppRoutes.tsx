import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home/Home";

import Login from "../pages/Login/Login";

import Register from "../pages/Register/Register";

import Dashboard from "../pages/Dashboard/Dashboard";

import Upload from "../pages/Upload/Upload";

import Sign from "../pages/Sign/Sign";

import SignaturePadPage
from "../pages/Signature/SignaturePadPage";

const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/upload"
          element={<Upload />}
        />

        <Route
          path="/sign"
          element={<Sign />}
        />

        <Route
          path="/signature"
          element={
            <SignaturePadPage />
          }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;