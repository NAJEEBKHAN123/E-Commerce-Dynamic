import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-green-600 mb-4 text-center">Welcome to the Dashboard</h1>
        <p className="text-gray-700 text-center mb-6">
          Manage your account, view data, and access tools seamlessly.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/profile"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Manage Account
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
