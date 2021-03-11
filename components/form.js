import { useState } from 'react'
import axios from 'axios'
import styles from '../components/form.module.scss'
import alertStyles from './customAlert.module.scss'

export default function Form() {

    const [userData, setUserData] = useState({
        fullName:'',
        email: '',
        phone: ''
    })

    const handleChange = (event)=>{
        const {name, value} = event.target

        setUserData((prevs)=>{
            return{
                ...prevs,
                [name] : value
            }
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        closePop();
        
        axios.post('/api/form-data', userData)
        .then(response => {
            if (response.status === 200) {
                document.querySelector('#pop-2').style.display = 'block';
                document.querySelector('#response').innerHTML = `${response.data.message}`;
                setTimeout( closePop2 , 3000);
            }
        })
        .catch(error =>{
            console.log(error)
            document.querySelector('#pop-2').style.display = 'block';
            document.querySelector('#pop-2').innerHTML = `${response.data.message}`;
            document.querySelector('#pop').style.display = 'block';
        })


        setUserData({
            fullName:'',
            email: '',
            phone:''
        })
    }

    const closePop = () => {
        document.querySelector('#pop').style.display = 'none';
        document.querySelector('#blur').style.filter = 'none';
    }

    const closePop2 = () => document.querySelector('#pop-2').style.display = 'none';

    return (


        <>
        
        <div className={alertStyles.container} id='pop-2'>
            <div className={alertStyles.wrap}>
            <p id='response' className={alertStyles.para}></p>
            <img src = "/images/cross.svg" className = {styles.cross} onClick = {closePop2}/>
            </div>
         </div>
        
       
        <div className = {styles.container} id = 'pop'>
            <header className = {styles.header} >
                <span className = {styles.title}>
                    <img src = "/images/logo.svg" className = {styles.logo}/>
                    <span>Active Invest</span>
                </span>

                <img src = "/images/cross.svg" className = {styles.cross} onClick = {closePop}/>

            </header>

            <section className = {styles.text}>
                <h1>Interested in Halal Investing?</h1>
                <h3>Let's get in touch.</h3>
                <hr />
            </section>
            
            <form
            onSubmit={handleSubmit} 
            className = {styles.contactForm}
            >
                <input 
                    required
                    type='text'
                    placeholder='Your Name'
                    name='fullName'
                    onChange={handleChange}
                    value={userData.fullName}
                />
                <input
                    required
                    type='email'
                    placeholder='Enter Your Email'
                    name='email'
                    onChange={handleChange}
                    value={userData.email}
                />
                
                <input
                    required
                    type='number'
                    placeholder='Enter Your Phone Number'
                    name='phone'
                    onChange={handleChange}
                    value={userData.phone}
                />

                <input type = 'submit' value = 'Continue' />
            </form>
        </div>

        </>
    );
};