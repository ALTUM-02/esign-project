import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";

import Login from "./pages/Login/Login";

import Register from "./pages/Register/Register";

import Dashboard from "./pages/Dashboard/Dashboard";

import Upload from "./pages/Upload/Upload";

import Sign from "./pages/Sign/Sign";

import SignaturePadPage
from "./pages/Signature/SignaturePadPage";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          element={<MainLayout />}
        >

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

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;