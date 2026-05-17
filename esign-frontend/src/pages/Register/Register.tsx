import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import api from "../../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({

      username: "",

      email: "",

      password: "",

      confirmPassword: "",

    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      alert(
        "Passwords do not match"
      );

      return;
    }

    try {

      setLoading(true);

      const response =
        await api.post(
          "/auth/register/",
          {

            username:
              formData.username,

            email:
              formData.email,

            password:
              formData.password,

          }
        );

      console.log(
        response.data
      );

      localStorage.setItem(
        "access",
        response.data.access
      );

      localStorage.setItem(
        "refresh",
        response.data.refresh
      );

      alert(
        "Registration successful"
      );

      navigate("/dashboard");

    } catch (error: any) {

      console.log(
        error.response?.data
      );

      alert(
        "Registration failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        <div className="text-center mb-6">

          <h1 className="text-4xl font-bold text-gray-800">

            Create Account

          </h1>

          <p className="text-gray-500 mt-2">

            Register to use E-Sign System

          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >

            {loading
              ? "Creating Account..."
              : "Register"}

          </button>

        </form>

        <p className="text-center text-gray-600 mt-6">

          Already have an account?

        </p>

        <Link
          to="/login"
          className="block text-center text-blue-600 hover:underline mt-2"
        >

          Login Here

        </Link>

      </div>

    </div>
  );
};

export default Register;