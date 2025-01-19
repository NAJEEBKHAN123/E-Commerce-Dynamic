const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/userMode');

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '7h',
  });
};
// Signup Controller
const signup = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    if(!username || !email || !password){
      res.status(400).json({message: 'All field are required'})
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || 'user', // Defaults to 'user'
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if(!email || !password){
      res.status(400).json({message: 'email or password required'})
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return res.status(400).json({ message: 'Invalid email or password' });

    const token = generateToken(user);
   console.log(token)
    // Include user object in the response
    res.json({
      message: 'Login successful',
      token: token,
      role: user.role,  // Include role
      user: {           // Include the user data
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = { signup, login };
