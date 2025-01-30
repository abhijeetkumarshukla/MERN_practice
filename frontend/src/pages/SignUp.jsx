import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://mern-practice-4.onrender.com/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        alert("Registration successful!");
        console.log(data);
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Check backend connection.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 border p-8 rounded-md bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300"
      >
        <h1 className="text-center font-black text-2xl">Register Page</h1>
        
        <input
          name="userName"
          onChange={handleInput}
          value={formData.userName}
          className="w-full border p-2 rounded-md"
          type="text"
          placeholder="Enter Your Username"
        />
        <input
          name="email"
          onChange={handleInput}
          value={formData.email}
          className="w-full border p-2 rounded-md"
          type="email"
          placeholder="Enter your email"
        />
        <input
          name="password"
          onChange={handleInput}
          value={formData.password}
          className="w-full border p-2 rounded-md"
          type="password"
          placeholder="Enter your password"
        />
        
        <button
          className="w-full border p-2 rounded-md font-medium bg-green-500 text-white"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

 

 