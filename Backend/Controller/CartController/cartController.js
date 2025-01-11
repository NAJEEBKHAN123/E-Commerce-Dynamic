const Cart = require('../models/Cart');
const Product = require('../models/Product'); // Ensure Product schema is imported
const User = require('../models/User'); // Ensure User schema is imported

// Add item to cart
const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if the user already has a cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create a new cart if none exists
      cart = new Cart({
        userId,
        items: [{ productId, quantity, price: product.price }],
      });
    } else {
      // Check if product already exists in the cart
      const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

      if (itemIndex > -1) {
        // Update quantity if product exists
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Add new product to the cart
        cart.items.push({ productId, quantity, price: product.price });
      }
    }

    await cart.save();
    return res.status(200).json({ message: 'Product added to cart', cart });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get user cart with populated data
const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId })
      .populate('userId', 'name email') // Populate user details (e.g., name and email)
      .populate('items.productId', 'name price description'); // Populate product details (e.g., name, price, description)

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    return res.status(200).json({ cart });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter((item) => item.productId.toString() !== productId);

    await cart.save();
    return res.status(200).json({ message: 'Product removed from cart', cart });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
};
