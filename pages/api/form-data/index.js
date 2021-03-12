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






