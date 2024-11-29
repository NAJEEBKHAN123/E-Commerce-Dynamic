const bcrypt = require("bcryptjs");
const User = require("../../models/userMode");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
     const existingUser = await User.findOne({email})
     if(existingUser){
        res.status(400).json({error: "User already Exit"})
     }
     const salt = await bcrypt.genSalt(Number(process.env.SALT))
     const hashPassword = await bcrypt.hash(password, salt)
     const newUser = new User({...req.body, password: hashPassword})
     await newUser.save()
     res.status(201).json({message: 'User created successfully', user: newUser})
  } catch (error) {
    console.log('Error in create user', error.message)
    res.status(500).json({messge: 'Internal server Error'})
  }
};

module.exports = register
