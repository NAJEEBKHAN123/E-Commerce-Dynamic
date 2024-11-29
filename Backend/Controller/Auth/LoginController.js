const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../../models/userMode')

const login = async(req, res) =>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
           return res.status(404).json({message: 'User not found'})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
            return re.status(401).json({message: 'Invalid Email or Password'})    
        }
        const token  = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })
        res.json({message: 'Login successful', token})

        
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = login