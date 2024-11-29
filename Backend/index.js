const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./db');
const authRoutes = require('./Routes/auth');
// const { verifyToken, authorizeRole } = require('./MiddleWare/authMiddleWare');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

const PORT = process.env.PORT || 5000;

// Public routes
app.use('/api/auth', authRoutes);

// Protected route for all authenticated users
// app.get('/api/user', verifyToken, (req, res) => {
//   res.json({ message: 'User content', user: req.user });
// });

// // Admin-only route
// app.get('/api/admin', verifyToken, authorizeRole('admin'), (req, res) => {
//   res.json({ message: 'Admin content', user: req.user });
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
