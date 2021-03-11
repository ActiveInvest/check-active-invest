const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please Add Your Full Name'],
    },

    email : {
        type: String,
        required: [true , 'Please Enter Your Email']
    },
    
    phone:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema);