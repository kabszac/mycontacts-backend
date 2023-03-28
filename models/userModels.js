const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, "Username is required"]
    },
    email:{
        type:String,
        required:[true, "email is required"],
        unique:[true, "This email already in use"]
    },
    password:{
        type:String,
        required:[true, "email is required"],
    }
})

module.exports = mongoose.model('User', userSchema)