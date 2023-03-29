const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModels')


//@desc  Register a user
//@route POST api/users/register
//@access public
const registerUser  = asyncHandler(async (req,res) => {
    const {username, email, password} = req.body
    if (!username || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const checkEmail = await User.findOne({email})
    if(checkEmail){
        res.status(400)
        throw new Error("email already registered")
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        username,
        email,
        password:hashPassword
    })
    if (user){
        res.status(201).json({_id:user.id, email:user.email})
    }else{
        res.status(400)
        throw new Error("User data not valid")
    }
    
})


//@desc  login a user
//@route POST api/users/login
//@access public
const loginUser  = asyncHandler(async (req,res) => {
    const {email, password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error("All fields are required")
    }
    const user = await User.findOne({email})
    if (user && await bcrypt.compare(password, user.password)){
        const accessToken = jwt.sign({
            user: {
                email: user.email,
                username: user.username,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" })
        res.status(200).json({accessToken})      
    }else{
        res.status(401)
        throw new Error("email or password is not valid")
    }
})

//@desc  current user login
//@route POST api/users/curreny
//@access private
const currentUser  = asyncHandler(async (req,res) => {
    res.status(200).json({message:"Current user login"})
})

module.exports = {registerUser, loginUser, currentUser}
