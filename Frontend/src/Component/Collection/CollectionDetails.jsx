import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/Slice/cartSlice"; // Import the action

function CollectionDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch
  const product = location.state;

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-bold text-gray-700">
          No product details found
        </h2>
      </div>
    );
  }

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    dispatch(addItemToCart(product)); // Dispatch the action with the product as payload
  };

  const handleShopNow = () => {
    navigate("/products"); // Navigate to the products page or wherever you want
  };

  return (
    <div className="flex flex-wrap gap-8 py-10 px-4">
      <div>
        <img
          src={product.url}
          alt="Product"
          className=" h-80 object-cover"
          style={{ width: "500px" }}
        />
      </div>
      <div>
        <div className="max-w-md">
          {/* Restricting width of the description */}
          <h1 className="text-gray-600 text-4xl font-bold pb-4">{product.desc}</h1>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Price: ${product.price}
        </h1>
        <h2 className="text-lg text-gray-700 mb-4">
          Quantity: {product.quantity || "Not available"}{" "}
          {/* Fallback for missing quantity */}
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
            onClick={() => navigate('/')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-12 rounded-lg shadow-md transition duration-200"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default CollectionDetails;
