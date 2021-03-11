import Head from "next/head";
import Nav from "../components/nav";
import Footer from '../components/footer'

import styles from "../styles/about.module.scss";

const about = () => {
	return (
		<>
			<Head>
				<title>About / Contact - Active Invest</title>
			</Head>
			<Nav />
			
			<div className={styles.container}>
				<main className={styles.main}>
					<div className={styles.title}>
						<h1>About Us</h1>
						<h3>Meet the Team</h3>
					</div>
					<div className={styles.cards}>
						<div className={styles.card}>
							<img src="/images/Zaman.png" />
							<h3>Abdullah Zaman</h3>
							<h6>Cheif Executive Officer</h6>
							<a
								href="https://www.linkedin.com/in/abdullah-zaman-a87860144/"
								target="_blank"
								rel="noopenner"
							>
								View on LinkedIn
							</a>
						</div>
						<div className={styles.card}>
							<img src="/images/Farooqui.png" />
							<h3>Ibrahim Farooqui</h3>
							<h6>Chief Technology Officer</h6>
							<a
								href="https://www.linkedin.com/in/ibrahimfarooqui/"
								target="_blank"
								rel="noopenner"
							>
								View on LinkedIn
							</a>
						</div>
						<div className={styles.card}>
							<img src="/images/Abdullah Tarin .png" />
							<h3>Abdullah N. Tarin</h3>
							<h6>Director</h6>
							<a
								href="https://www.linkedin.com/in/abdullah-tarin-2021/"
								target="_blank"
								rel="noopenner"
							>
								View on LinkedIn
							</a>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default about;
