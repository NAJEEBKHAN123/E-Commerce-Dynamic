import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Common/Navbar';
import Footer from './Component/Common/Footer';
import Home from './Pages/Home';
// import About from './components/Pages/About';
// import Contact from './components/Pages/Contact';
import Login from './Component/Auth/Login';
import Signup from './Component/Auth/Signup';
import ProductList from './Component/Products/ProductList';
import ProductDetails from './Component/Products/ProductDetails';
import PrivateRoute from './Component/Common/PrivateRoutes';
import AdminDashboard from './Component/Dashboard/AdminDashboard';
import UserDashboard from './Component/Dashboard/UserDashbard';
import NotFound from './Pages/NotFound';
import ProductForm from './Component/Products/ProductForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-product" element={<PrivateRoute roles={['admin']}><ProductForm /></PrivateRoute>} />
            <Route path="/edit-product/:id" element={<PrivateRoute roles={['admin']}><ProductForm /></PrivateRoute>} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Protected Routes */}
          <Route
            path="/user-dashboard"
            element={<PrivateRoute roles={['user']}><UserDashboard /></PrivateRoute>}
          />
          <Route
            path="/admin-dashboard"
            element={<PrivateRoute roles={['admin']}><AdminDashboard /></PrivateRoute>}
          />

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
