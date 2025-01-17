import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 m-0 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">E-Shop</h3>
          <p className="text-sm">
            Your one-stop shop for all your needs! Discover a wide range of products with great deals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/products" className="hover:text-yellow-400 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-yellow-400 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Email:</strong> najeeb@eshop.com
            </li>
            <li>
              <strong>Phone:</strong> +923 0884 4190
            </li>
            <li>
              <strong>Address:</strong> 123 E-Shop Street, City, Country
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=100053768207242"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/najeeb-khan90?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; 2025 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
