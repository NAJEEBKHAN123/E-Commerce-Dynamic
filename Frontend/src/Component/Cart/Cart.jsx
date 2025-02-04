import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseQuantity, DecreaseQuantity } from '../../Redux/Slice/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  
  const handleItemIncrease = (productId) => {
    dispatch(increaseQuantity({ _id: productId })); // Pass _id
  };
  
  const handleItemDecrease = (productId) =>{ 
      dispatch(DecreaseQuantity({_id: productId}))
  }
 
  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart({ _id: itemId }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  console.log(cartItems.image)

  return (
    <div className="container mx-auto py-6 ">
      <h2 className="mb-5 text-center mt-10">Your cart is empty. </h2>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p className='text-center'><Link to="/products" className="bg-blue-700 px-10 py-3 text-2xl text-white hover:bg-blue-500 rounded-lg">Start shopping</Link></p>
      ) : (
        <div>
          <div className="flex flex-col space-y-4 overflow-auto scroll-m-2 ">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-md overflow-scroll">
                <div className="flex items-center space-x-4">
                  <img  src={item.image || 'https://media.istockphoto.com/id/2167432886/photo/summertime-vacation-asian-female-traveller-young-adult-asian-woman-with-shopping-bags-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=6sX2W5p_zCLKigYSrq4vFUA8gHPFDGw6wzc11EoFHwo='} alt={item.name} className="w-16 h-16 object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
          
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleItemDecrease(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <button
                  onClick={() => handleItemIncrease(item._id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item._id)}
                  className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                >
                  Remove
                </button>
              </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${calculateTotal().toFixed(2)}</p>
            <div>
              <button
                onClick={handleClearCart}
                className="bg-red-600 text-white px-4 py-2 rounded-md mr-4"
              >
                Clear Cart
              </button>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
