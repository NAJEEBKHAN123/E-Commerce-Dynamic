import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!username.trim() || !email.trim() ||!password.trim()) {
      setError("All field are required");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password,
      });
      setMessage("Signup successful! Please log in.");
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data || "Error occurred during signup");
      setMessage(err.response?.data?.message || "Signup failed!");
      setError("Error in Signup");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleGoogleSignup = () => {
    alert("Google Signup functionality not implemented yet.");
    // Implement Google OAuth logic here
  };

  const handleFacebookSignup = () => {
    alert("Facebook Signup functionality not implemented yet.");
    // Implement Facebook OAuth logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Signup
          </button>
          {message && <p className="text-center bg-red-500 px-4 py-2 rounded-md">{message}</p>}
          {error && <p className="text-center text-red-500 ">{error}</p>}
        </form>
        <div className="my-4 text-center text-gray-600">or sign up with</div>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Google
          </button>
          <button
            onClick={handleFacebookSignup}
            className="flex items-center justify-center w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
          >
            Facebook
          </button>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
