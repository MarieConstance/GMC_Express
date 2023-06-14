const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter a name"]
        },
        firstname:{
            type: String,
            required: true
           
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


module.exports = mongoose.model("user", userSchema); 