const express = require('express');
const { verifyToken,authorizeRole} = require('../MiddleWare/authMiddleWare');


const router = express.Router();

router.get('/dashboard', verifyToken, authorizeRole('admin'), (req, res) => {
  res.json({ message: 'Welcome to the Admin Dashboard', user: req.user });
});

module.exports = router;
