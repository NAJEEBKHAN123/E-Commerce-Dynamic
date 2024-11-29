import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password,
      });
      setMessage("Signup successful! Please log in.");
      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data || "Error occurred during signup");
      setMessage(err.response?.data?.message || "Signup failed!");
      setError('Error in Signup')
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
          {message && <p className="text-center text-red-500 mt-2">{message}</p>}
        </form>
        <div className="my-4 text-center text-gray-600">or sign up with</div>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M24 9.5c3.7 0 6.8 1.5 9 3.9l6.7-6.7C36.2 2.7 30.4 0 24 0 14.3 0 6.2 5.9 2.5 14.4l7.9 6.1c1.7-5.4 6.8-9.3 13.6-9.3z"
              />
              <path
                fill="#e53935"
                d="M46.5 24c0-1.6-.2-3.1-.5-4.6H24v9h12.9c-1.2 3-3.3 5.5-6.2 7.2l7.9 6.1c4.6-4.3 7.3-10.6 7.3-17.7z"
              />
              <path
                fill="#4caf50"
                d="M10.4 28.6c-.6-1.7-.9-3.5-.9-5.6s.3-3.9.9-5.6L2.5 11c-1.7 3.4-2.5 7.1-2.5 11s.9 7.6 2.5 11l7.9-6.4z"
              />
              <path
                fill="#1565c0"
                d="M24 48c6.5 0 12-2.1 16.1-5.6l-7.9-6.1c-2.2 1.4-5 2.2-8.2 2.2-6.7 0-12.3-4.3-14.3-10.3l-7.9 6.1C6.2 42.1 14.3 48 24 48z"
              />
            </svg>
            Google
          </button>
          <button
            onClick={handleFacebookSignup}
            className="flex items-center justify-center w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              viewBox="0 0 48 48"
            >
              <path
                fill="#1877f2"
                d="M24 4C12.5 4 4 12.5 4 24s8.5 20 20 20 20-8.5 20-20S35.5 4 24 4z"
              />
              <path
                fill="#fff"
                d="M26.5 24h4.4l.6-4.6h-5v-2.3c0-1.3.4-2.3 2.3-2.3h2.4V10.7c-.4-.1-1.7-.2-3.4-.2-3.4 0-5.8 2.1-5.8 5.9v3.2h-3.9v4.6h3.9v11.9h4.8V24z"
              />
            </svg>
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
