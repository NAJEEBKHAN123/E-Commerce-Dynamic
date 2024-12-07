import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/Slice/authSlice';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">E-Shop</Link>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/products">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="btn btn-login">Login</Link>
            </>
          ) : (
            <>
              {role === 'user' && <Link to="/user-dashboard">My Account</Link>}
              {role === 'admin' && <Link to="/admin-dashboard">Admin</Link>}
              <button onClick={handleLogout} className="btn btn-logout">Logout</button>
            </>
          )}
          <Link to="/cart" className="btn btn-cart">🛒 Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
