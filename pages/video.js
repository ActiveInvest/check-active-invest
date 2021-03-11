import Head from "next/head";
import Nav from "../components/nav";
import Footer from '../components/footer'
import styles from '../styles/video.module.scss';

export default function Video() {
    return (
        <>
        <Head>
            <title>Investing - Active Invest</title>
        </Head>
        <Nav />
        <div className={styles.mainDiv}>
        <div className = {styles.container}>
            <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/5EDYztbEmRw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
        </div>
        </div>
        <Footer />
        </>
    )
}
