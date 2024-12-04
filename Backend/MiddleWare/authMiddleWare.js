const jwt = require('jsonwebtoken');
const User = require('../models/userMode.js')


// Verify User Middleware
 const verifyUser = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.json({
        success: false,
        message: 'No token provided',
      });
    }
    
    const getToken = req.headers.authorization.split(' ')[1];
    const verifyUser = await jwt.verify(getToken, process.env.JWT_SECRET);
    
    req.userId = verifyUser.userId;
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// Verify Admin Middleware
 const verifyAdmin = async (req, res, next) => {
  try {
    const userId = req.userId;  // Getting userId from req.userId set by verifyUser
    const userExists = await User.findById(userId);  // Find user in DB

    if (!userExists) {
      return res.json({
        success: false,
        message: 'User not found',
      });
    }

    // Check if the user has admin privileges
    if (userExists.role !== 'admin') {
      return res.json({
        success: false,
        message: 'Unauthorized access, admin role required',
      });
    }

    next(); 
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// Authorize Role Middleware

module.exports = { verifyAdmin, verifyUser };
