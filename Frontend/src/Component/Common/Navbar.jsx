import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/Slice/authSlice";
import { clearCart } from "../../Redux/Slice/cartSlice";
import Logo from "../../assets/Logo.webp";
import "./style.css";
import Modal from "../Cart/Model";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md px-14 navbar">
        <div className="container mx-auto flex justify-between items-center py-3">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="E-Shop Logo"
                className="w-12 h-12 rounded-full md:h-12 md:w-12 sm:h-8 sm:w-8 logo"
              />
            </Link>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex space-x-6 pl-24">
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
            {isAuthenticated && role === "admin" && (
              <Link to="/admin-dashboard" className="hover:text-yellow-400 transition">
                Admin Panel
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-2xl lg:hidden focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

          {/* Right Side Options */}
          <div className="flex items-center space-x-3">
            {/* Search Link */}
            <Link to="/search" className="hover:text-yellow-400 transition flex items-center">
              <i className="fas fa-search text-xl mr-1" />
            </Link>

            {/* Login/Logout Link */}
            {!isAuthenticated ? (
              <Link to="/login" className="hover:text-yellow-400 transition flex items-center">
                <i className="fas fa-user-plus text-xl mr-1" />
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="hover:text-yellow-400 transition flex items-center"
              >
                <i className="fas fa-sign-out-alt text-xl mr-1" />
              </button>
            )}

            {/* Cart Link */}
            <button
              onClick={toggleCart}
              className="relative hover:text-yellow-400 transition flex items-center"
              aria-label="View cart"
            >
              <i className="fas fa-shopping-cart text-xl mr-1" />
              <span className="absolute top-0 right-0 z-10 px-1 bg-red-600 text-white rounded-full text-xs transform -translate-x-1/2 -translate-y-1/2">
                {cartItems.length}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-18 left-0 z-20 lg:hidden bg-gray-700 py-4 w-32 text-center rounded-md px-6 items-center space-y-4">
            <Link
              to="/"
              className="block hover:text-yellow-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block hover:text-yellow-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/blogs"
              className="block hover:text-yellow-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className="block hover:text-yellow-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block hover:text-yellow-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            {isAuthenticated && role === "admin" && (
              <Link
                to="/admin-dashboard"
                className="block hover:text-yellow-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Panel
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* Cart Modal */}
      <Modal isOpen={isCartOpen} onClose={toggleCart}>
        <Cart />
      </Modal>
    </>
  );
};

export default Navbar;
