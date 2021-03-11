import https from 'https'

export default (req, res) =>{

    if(req.method === 'POST'){

        try {

            const email = req.body.email
            const fullName= req.body.fullName
            const phone = req.body.phone

            const data = {
                
                members : [
                    {
                        email_address : email,
                        status : "subscribed",
                        merge_fields: {
                            FULL_NAME: fullName,
                            PHONE: phone
                        }
                    }
                ]
            }

    const jsonData = JSON.stringify(data);

    const url = `https://us1.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`
    const options = {
        method : "POST",
        auth : `activeInvest123:${process.env.API_KEY}`
    }

     const request = https.request(url , options, (response)=>{
        if(response.statusCode === 200){
            res.json({
                status: 200,
                message: 'Successfully Subscribed'
            })    
            
        } else {
             res.json({
                status: 404,
                message: 'Error Now'
            })
        }    
    })

    request.write(jsonData)
    request.end()
            
        } catch (error) {
                        res.json({
                message : "Method is GET, but error",
                status: 403,
            })
        }

            

    }
}






// import connectDB from '../../../config/connectDB.js'
// import User from '../../../models/userModel.js'

// connectDB()

// export default async (req, res) => {
    
//     if (req.method === 'POST') {

//         try {
//             User.findOne({email : req.body.email})
//             .then(user =>{
//                 if(user){
//                     res.json({
//                         message : "User Already Exists",
//                         status: 200,
//                         data: user
//                     })
//                 } else{
//                     const userDetail = new User({
//                         fullName: req.body.fullName,
//                         email: req.body.email,
//                         phone: req.body.phone
//                     })

//                     userDetail
//                     .save()
//                     .then(user=>res.json({
//                         message: "Submitted ",
//                         status: 200,
//                         data: user
//                     }))
//                     .catch(err=>console.log(err))
//                 }
//             })        
 
//         } catch (error) {
//             res.json({
//                 message : "Error, Please Re-Enter Your Data",
//                 status: 404,
//             })
//         }
               
//       } else if(req.method === 'GET'){
//         try {
//             const userData = User.find({})
//             .then(
//                 res.json({
//                 message : "Method is GET",
//                 status: 201,
//                 data: userData
//             }))


//         } catch (error) {
//             res.json({
//                 message : "Method is GET, but error",
//                 status: 403,
//             })
//         }
//       }
//   }
