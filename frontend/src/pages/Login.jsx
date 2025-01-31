import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://mern-practice-4.onrender.com/user/login",
        formData
      );

      alert("Login successful!");
      console.log("Login Response:", res.data);
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 border p-8 rounded-md bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 text-white"
      >
        <h1 className="text-center font-black text-2xl">Login Page</h1>

        {error && <p className="text-red-400 text-center">{error}</p>}

        <input
          name="email"
          value={formData.email}
          onChange={handleInput}
          className="w-full border p-2 rounded-md text-black"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleInput}
          className="w-full border p-2 rounded-md text-black"
          type="password"
          placeholder="Enter your password"
          required
        />

        <button
          className="w-full border p-2 rounded-md font-medium bg-green-500 text-white disabled:bg-gray-400"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
