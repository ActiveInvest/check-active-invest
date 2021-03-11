import Head from "next/head";
import Footer from '../components/footer'
import Nav from "../components/nav";
import contactStyles from '../styles/contact.module.scss'

const contact = () => {







    
    return (
        <>
            <Head>
				<title>Contact Us - Active Invest</title>
			</Head>
            <Nav />
            <main className={contactStyles.mainHead}>
            <div>
                <div className={contactStyles.mainTitle}>
                    <h1> Contact Us </h1>
                    <h3> Help & Support </h3>
                </div>
            </div>


            <div className = {contactStyles.container}>
                <p className={contactStyles.para}>We’d love to discuss how we can help you.</p>
                <form
            // onSubmit={handleSubmit} 
            className = {contactStyles.contactForm}
            >
                <input 
                    required
                    type='text'
                    placeholder='Your Name'
                    name='fullName'
                    // onChange={handleChange}
                    // value={userData.fullName}
                />
                <input
                    required
                    type='email'
                    placeholder='Enter Your Email'
                    name='email'
                    // onChange={handleChange}
                    // value={userData.email}
                />
                
                <input
                    required
                    type='number'
                    placeholder='Enter Your Phone Number'
                    name='phone'
                    // onChange={handleChange}
                    // value={userData.phone}
                />

                <textarea 
                required
                type='text'
                placeholder='Enter Your Message'
                name='message'
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
