import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ImageDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state;

  if (!image) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-bold text-gray-700">
          No image details found
        </h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert("Added to cart!");
    // Add your cart logic here
  };

  const handleShopNow = () => {
    alert("Redirecting to shop...");
    // Add your shop logic here
  };

  return (
    <div className="flex flex-wrap gap-8 py-10 px-4">
      <div className="">
        <img
          src={image.url}
          alt="Product"
          className="h-80 object-cover"
          style={{ width: "500px" }}
        />
      </div>
      <div>
        <h1 className="text-gray-600 text-4xl font-bold pb-4">{image.desc}</h1>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Price: ${image.price}
        </h1>
        <h2 className="text-lg text-gray-700 mb-4">
          Quantity: {image.quantity || "Not available"} {/* Fallback for missing quantity */}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 pt-10">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md transition duration-200"
          >
            Add to Cart
          </button>
          <button
            onClick={handleShopNow}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg shadow-md transition duration-200"
          >
            Shop Now
          </button>
        </div>
        <div className="pt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-12 rounded-lg shadow-md transition duration-200"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
