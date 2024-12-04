const User = require("../../models/userMode");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const addUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return res.json({
      success: true,
      message: "User added successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error in addUser:", error.message);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    return res.json({
      success: true,
      message: "user fetch successfully",
      data: user,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const userExist = await User.findOne({email });
   
    if(!email || !password){
        res.json({
            success: false,
            message: "Email and Password Both required"
        })}
      if (!userExist) {
        return res.json({
          success: false,
          message: "User not found",
        });
      }
      const isMatch = await bcrypt.compare(req.body.password, userExist.password);

      if (!isMatch) {
        return res.json({
          success: false,
          message: "Invalid Creadintial",
        });
      }
      const jwtToken = jwt.sign(
        { userId: userExist._id },
        process.env.JWT_SECRET
      );
  
      return res.json({
        success: true,
        message: "Logged in successfully",
        data: { ...userExist, jwtToken },
      });
  } catch (error) {
    console.error("Error in login:", error.message);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { addUser, getUser, getUsers, login };
