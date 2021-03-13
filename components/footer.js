import footerStyles from './footer.module.scss'
import Link from "next/link";

const footer = () => {
    return (
        <>
        <div className={footerStyles.footer}>
            <p className={footerStyles.footerText}>  Made with <span className={footerStyles.heart}> ♥ </span>at<Link href='/'> Active Invest </Link>, &copy; 2021 All Rights Reserved</p>
        </div>
            
        </>
    ) 
}

export default footer;
