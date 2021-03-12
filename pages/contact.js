import { useState } from 'react'
import axios from 'axios'
import Head from "next/head";
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import contactStyles from '../styles/contact.module.scss'

const contact = () => {

    const [formData, setFormData] = useState({
        fullName:'',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (event)=>{
        const {name, value} = event.target

        setFormData((prevs)=>{
            return{
                ...prevs,
                [name] : value
            }
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.post('/api/contact-form-data', formData)
        .then(response => {
            if (response.status === 200) {
                document.querySelector('#message').style.display = 'block';
                document.querySelector('#message').innerHTML = `${response.data.message}`;
                setTimeout( ()=>{ document.querySelector('#message').style.display = 'none'; }, 3000);
            } else{
                document.querySelector('#message').style.display = 'block';
                document.querySelector('#message').innerHTML = `${response.data.message}`;
                setTimeout( ()=>{ document.querySelector('#message').style.display = 'none'; }, 3000);
            }
        })
        .catch(error =>{
            console.log(error)
        })


        setFormData({
            fullName:'',
            email: '',
            phone:'',
            message:''
        })
    }



    return (
        <>
            <Head>
				<title>Contact Us - Active Invest</title>
			</Head>
            <Navbar />
            <main className={contactStyles.mainHead}>
            <div>
                <div className={contactStyles.mainTitle}>
                    <h1> Contact Us </h1>
                    <h3> Help & Support </h3>
                </div>
            </div>


            <div className = {contactStyles.container}>
                <p className={contactStyles.para}>We’d love to discuss how we can help you.</p>
                <p id='message' className={contactStyles.para2}></p>
                <form
                onSubmit={handleSubmit} 
                className = {contactStyles.contactForm}
                >
                    <input 
                        required
                        type='text'
                        placeholder='Your Name'
                        name='fullName'
                        onChange={handleChange}
                        value={formData.fullName}
                    />

                    <input
                        required
                        type='email'
                        placeholder='Enter Your Email'
                        name='email'
                        onChange={handleChange}
                        value={formData.email}
                    />
                
                    <input
                        required
                        type='number'
                        placeholder='Enter Your Phone Number'
                        name='phone'
                        onChange={handleChange}
                        value={formData.phone}
                    />

                    <textarea 
                    required
                    type='text'
                    placeholder='Enter Your Message'
                    name='message'
                    onChange={handleChange}
                    value={formData.message}
                    />
               
                    <input type = 'submit' value = 'Submit' />

            </form>

                </div>

		  
            </main>
            <Footer />
        </>
    )
}

export default contact
