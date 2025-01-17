import React from "react";
import { useNavigate } from "react-router-dom";

function Banner2() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products"); // Route to the Shop component
  };

  return (
    <div className="bg-gray-100">
      <div className="pb-10 text-4xl font-bold text-center">
        <h1>Exclusive Offers on Mobiles, Laptops, and Watches!</h1>
      </div>
      <div className="relative group">
        <img
          src="https://images.unsplash.com/photo-1609334761848-77b4d1994040?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8"
          alt="Shop Banner"
          className="w-full object-cover h-[400px]"
        />
        {/* Button appears on hover */}
        <button
          onClick={handleShopNow}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Banner2;
