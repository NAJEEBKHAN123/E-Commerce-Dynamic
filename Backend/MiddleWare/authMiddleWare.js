const jwt = require('jsonwebtoken');
const User = require('../models/userMode.js')


// Verify User Middleware
const verifyUser = async (req, res, next) => {
  try {
    console.log('Authorization Header:', req.headers.authorization);

    if (!req.headers.authorization) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const token = req.headers.authorization.split(' ')[1];
    console.log('Extracted Token:', token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded);

    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error('Error in verifyUser:', error.message);
    return res.status(403).json({ success: false, message: error.message });
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
