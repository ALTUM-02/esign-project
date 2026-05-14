import { useState } from "react";
import api from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../../components/forms/InputField";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const response = await api.post(
        "login/",
        {
          username,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.access
      );

      localStorage.setItem(
        "refresh",
        response.data.refresh
      );

      alert("Login successful!");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      setError(
        "Invalid username or password"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="w-96 shadow-lg p-8 rounded-xl">

        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        {error && (

          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <InputField
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            required
          />

          <InputField
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white p-3 rounded"
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>

        </form>

        <p className="mt-4 text-center">

          Don't have an account?

        </p>

        <Link
          to="/register"
          className="text-blue-500 block text-center"
        >
          Register
        </Link>

      </div>

    </div>
  );
};

export default Login;