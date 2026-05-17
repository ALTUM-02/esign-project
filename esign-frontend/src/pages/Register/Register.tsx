import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      const response = await api.post("login/", formData);

      localStorage.setItem("token", response.data.access);

      alert("Login successful");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      alert("Invalid username or password");
    }
  };

  return (

    <div className="flex flex-col items-center justify-center min-h-screen">

      <h1 className="text-3xl font-bold mb-5">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-80"
      >

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded"
        >
          Login
        </button>

      </form>

      <p className="mt-4">
        Don't have an account?
      </p>

      <Link
        to="/register"
        className="text-blue-500"
      >
        Register
      </Link>

    </div>
  );
};

export default Registeregister;