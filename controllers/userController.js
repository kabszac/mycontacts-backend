const asyncHandler = require('express-async-handler')


//@desc  Register a user
//@route POST api/users/register
//@access public
const registerUser  = asyncHandler(async (req,res) => {
    res.status(201).json({message:"Register the user"})
})


//@desc  login a user
//@route POST api/users/login
//@access public
const loginUser  = asyncHandler(async (req,res) => {
    res.status(201).json({message:"User login"})
})

//@desc  current user login
//@route POST api/users/curreny
//@access private
const currentUser  = asyncHandler(async (req,res) => {
    res.status(200).json({message:"Current user login"})
})

module.exports = {registerUser, loginUser, currentUser}
