const jwt = require('jsonwebtoken');
const User = require('../models/userMode.js')


// Verify User Middleware
const verifyUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token provided or invalid format' });
    }

    const token = authHeader.split(' ')[1];

    // Decode the token and set the userId in the request
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    // Log the userId to verify it's being set
    console.log('User ID in verifyUser:', req.userId);

    next();
  } catch (error) {
    console.error('Token verification error:', error.message);

    const message =
      error.name === 'TokenExpiredError'
        ? 'Token has expired'
        : 'Invalid or expired token';

    return res.status(403).json({ success: false, message });
  }
};


const verifyAdmin = async (req, res, next) => {
  try {
    console.log('User ID in verifyAdmin:', req.userId);

    const userExists = await User.findById(req.userId);
    console.log('Fetched User:', userExists);

    if (!userExists) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (userExists.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Admin access required' });
    }

    next();
  } catch (error) {
    console.error('Error in verifyAdmin:', error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};


module.exports = { verifyAdmin, verifyUser };
