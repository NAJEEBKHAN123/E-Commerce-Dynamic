import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Home from './Pages/Home';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </AuthProvider>
  );
};

export default App;
