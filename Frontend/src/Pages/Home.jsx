import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Signup from '../Component/Auth/Signup';
import Login from '../Component/Auth/Login';
import ProductList from '../Component/Products/ProductList';
import ProductForm from '../Component/Products/ProductForm';
import ProductDetails from '../Component/Products/ProductDetails';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import PrivateRoute from '../Component/PrivateRoute'

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/edit-product/:id" element={<ProductForm />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/admin-dashboard" element={<PrivateRoute roles={['admin']}><AdminDashboard /></PrivateRoute>} />
        <Route path="/user-dashboard" element={<PrivateRoute roles={['user']}><UserDashboard /></PrivateRoute>} />

      </Routes>
    </div>
  );
};

export default Home;
