import connectDB from '../../../config/connectDB.js'
import ContactForm from '../../../models/contactFormModels.js'

connectDB()

export default async (req, res) => {
    
    if (req.method === 'POST') {

        const newMessage = new ContactForm({
            fullName : req.body.fullName,
            email : req.body.email,
            phone : req.body.phone,
            message : req.body.message
        })

        newMessage
        .save()
        .then( res.json({
            status:200,
            message: 'Thank You For Contacting Us.'
        }))
        .catch((err)=>{
            res.json({
                status:404,
                message: 'Error Occured , Please Try Again'
            })
            console.log(err)})
      } 
  }
