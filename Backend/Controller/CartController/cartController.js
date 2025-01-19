const Cart = require('../../models/cartSchema');
const Product = require('../../models/productSchema');


// Add Item to Cart


exports.addItemToCart = async (req, res) => {
 
  try {
    const { productId, quantity, userId } = req.body;

    // Ensure req.userId is defined
    if (!userId) {
      return res.status(400).json({ message: 'User not authenticated' });
    }

    // Validate product ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Find the user's cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // If no cart, create a new one
      cart = new Cart({
        user: req.userId,
        items: [{ product: productId, quantity }]
      });
    } else {
      // If cart exists, update it
      const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

      if (itemIndex === -1) {
        // Product not in cart, add it
        cart.items.push({ product: productId, quantity });
      } else {
        // Product already in cart, update quantity
        cart.items[itemIndex].quantity += quantity;
      }
    }

    await cart.save();
    res.status(200).json({ message: 'Product added to cart', cart });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


// Remove Item from Cart by Item ID
exports.removeItemFromCart = async (req, res) => {
  try {
    const { itemId } = req.params; // Extract itemId from URL
    const userId = req.userId; // Assuming userId is coming from authentication middleware

    // Find the cart for the authenticated user
    const cart = await Cart.findOne({  userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Find and remove the item
    const itemIndex = cart.items.findIndex(item => item._id.toString() === itemId);
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    cart.items.splice(itemIndex, 1); // Remove the item
    cart.totalPrice = cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0); // Update total price

    await cart.save();
    res.status(200).json({ message: 'Item removed from cart', cart });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};



// Clear Cart
exports.clearCart = async (req, res) => {
  try {
    // Use req.userId from the authentication middleware
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    // Find and delete the user's cart
    const cart = await Cart.findOneAndDelete({  userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json({ message: 'Cart cleared successfully', cart});
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Get User Cart

exports.getUserCart = async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch cart for the given userId and populate product details
    const cart = await Cart.findOne({ userId }).populate('items.product');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json({ cart });
  } catch (error) {
    console.error('Error retrieving cart:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

