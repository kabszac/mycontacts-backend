const express = require('express')

const router = express.Router() 


router.post('/register', (req,res) => {
    res.status(201).json({message:"Register the user"})
})

router.post('/login', (req,res) => {
    res.status(201).json({message:"login the user"})
})

router.post('/current', (req,res) => {
    res.status(201).json({message:"Current user information"})
})

module.exports = router