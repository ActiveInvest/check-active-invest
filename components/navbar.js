import Link from "next/link";
import Head from 'next/head'
import navStyles from './navbar.module.scss'

const Header = () => {
    return (

        <>

<Head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</Head>


<nav class="navbar navbar-expand-lg navbar-light">
    <div className='container'>
    
    <Link href="/" >
		<a class="navbar-brand">
            <span className={navStyles.logoContainer}>
            <img src="/images/logo.svg" className={navStyles.img} />
			<h1 className={navStyles.logoText}>Active&nbsp;Invest</h1>
            </span>	
		</a>
	</Link>
   
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span> 
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

    <div class="navbar-nav ml-auto">
      <Link href="/about"><span className={navStyles.navLink}><a class="nav-item nav-link active" > About Us </a></span></Link>
      <Link href="/contact"><span className={navStyles.navLink}><a class="nav-item nav-link active"> Contact Us </a></span></Link>
      <Link href="/stocks"><span className={navStyles.navButton}><a class="nav-item nav-link active" style={{color:'#fff'}}> Get&nbsp;Started </a></span></Link>
    </div>

  </div>
  </div>
</nav>


        </>
    )
}

export default Header