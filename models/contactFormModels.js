const mongoose = require('mongoose')

const contactFormSchema = new mongoose.Schema({
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
    },

    message:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.models.ContactForm || mongoose.model('ContactForm', contactFormSchema);