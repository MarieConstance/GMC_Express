const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        nom:{
            type: String,
            required: [true, "Please enter a name"]
        },
        email: {
            type: String,
            required: true,
        },
          telephone: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
          
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("user", userSchema); 
module.exports = User;