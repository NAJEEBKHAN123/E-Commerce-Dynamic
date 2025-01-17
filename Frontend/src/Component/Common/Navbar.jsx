import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/Slice/authSlice';
import Logo from '../../assets/Logo.webp';
import './style.css'

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
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50 overflow-hidden"  >
      <div className="container mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt="E-Shop Logo" className="w-12 h-12 rounded-full" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-yellow-400 transition">
            Shop
          </Link>
          <Link to="/blogs" className="hover:text-yellow-400 transition">
            Blogs
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none"
        >
          ☰
        </button>

        {/* Right Side Options */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/search" className="hover:text-yellow-400 transition">
            Search
          </Link>
          {!isAuthenticated ? (
            <Link to="/login" className="hover:text-yellow-400 transition">
              Login
            </Link>
          ) : (
            <>
              {role === 'user' && (
                <Link to="/user-dashboard" className="hover:text-yellow-400 transition">
                  My Account
                </Link>
              )}
              {role === 'admin' && (
                <Link to="/admin-dashboard" className="hover:text-yellow-400 transition">
                  Admin
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="hover:text-yellow-400 transition"
              >
                Logout
              </button>
            </>
          )}
          <Link to="/cart" className="hover:text-yellow-400 transition">
            Cart <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">0</span>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 py-4 w-32 text-center rounded-md px-6 items-center space-y-4">
          <Link to="/" className="block hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/products" className="block hover:text-yellow-400 transition">
            Shop
          </Link>
          <Link to="/blogs" className="block hover:text-yellow-400 transition">
            Blogs
          </Link>
          <Link to="/about" className="block hover:text-yellow-400 transition">
            About Us
          </Link>
          <Link to="/contact" className="block hover:text-yellow-400 transition">
            Contact Us
          </Link>
          <div className="border-t border-gray-600 pt-4 space-y-4">
            {!isAuthenticated ? (
              <Link to="/login" className="block hover:underline transition">
                Login
              </Link>
            ) : (
              <>
                {role === 'user' && (
                  <Link
                    to="/user-dashboard"
                    className="block hover:text-yellow-400 transition"
                  >
                    My Account
                  </Link>
                )}
                {role === 'admin' && (
                  <Link
                    to="/admin-dashboard"
                    className="block hover:text-yellow-400 transition"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="block hover:text-yellow-400 transition"
                >
                  Logout
                </button>
              </>
            )}
            <Link to="/cart" className="block hover:text-yellow-400 transition">
              Cart <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">0</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
