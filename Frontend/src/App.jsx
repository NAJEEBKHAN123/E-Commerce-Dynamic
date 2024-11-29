import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Component/AuthContext';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import PrivateRoute from './Component/PrivateRoute';
import Signup from './Component/Signup';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} /> {/* Add route for signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  </AuthProvider>
  );
};

export default App;
