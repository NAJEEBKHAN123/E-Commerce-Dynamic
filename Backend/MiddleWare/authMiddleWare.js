// const jwt = require('jsonwebtoken');

// // Verify Token Middleware
// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1]; // Extract token from header
//   if (!token) return res.status(401).json({ message: 'No token provided' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
//     req.user = decoded; // Add decoded user info to request
//     next();
//   } catch (err) {
//     res.status(403).json({ message: 'Invalid or expired token' });
//   }
// };

// // Authorize Role Middleware
// const authorizeRole = (role) => (req, res, next) => {
//   if (req.user.role !== role) {
//     return res.status(403).json({ message: 'Access denied. Admins only.' });
//   }
//   next();
// };

// module.exports = { verifyToken, authorizeRole };
