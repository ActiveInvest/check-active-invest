import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Nav from "../components/nav";
import Form from "../components/form";
import Footer from '../components/footer'

import styles from "../styles/index.module.scss";

const CheckedList = ({ stmts }) => (
	<ul>
		{stmts.map((s) => (
			<li key={s}>
				<FontAwesomeIcon size="sm" icon={faCheck} />
				<p>{s}</p>
			</li>
		))}
	</ul>
);

export default function Home() {
	return (
		<>
			<Head>
				<title>Active Invest - Halal Investing Made Easy</title>
			</Head>
			<Form />
			<Nav />
			<div className={styles.intro} id = 'blur'>
				<div>
					<h1 className={styles.heading}>Halal Investing</h1>
					<h1 className={styles.heading}>Made Easy</h1>

					<div>
						<div>
							<p>Buy 1300+ Halal Stocks</p>
							<p>Get Expert Advice</p>
							<p>Grow Your Wealth</p>
						</div>

						<Link href="/stocks">
							<a>
								<span>Get Started</span>
							</a>
						</Link>
						<Link href = "/video">
							<a>Watch Video</a>
						</Link>
					</div>
				</div>
				<span>
					<FontAwesomeIcon
						size="4x"
						icon={faAngleDown}
						color="#1b1f1f"
						onClick={() =>
							scrollTo({
								left: 0,
								top: typeof window !== "undefined" ? innerHeight : 0,
								behavior: "smooth",
							})
						}
					/>
				</span>
			</div>

			<main className={styles.main}>
				<div>
					<h2>Are Stocks Really Halal?</h2>
					<p>
						Yes they are! Buying stocks is just like owning a stake in a Friend’s
						business. Stocks represent a fractional ownership in a large company.
					</p>
					<p>
						But not all stocks are Halal. We analyse the fudamentals of a company on a
						regular basis to check for Shari’ah compliance and to see if it is Halal to
						invest in them or not.
					</p>

					<a>Read more</a>
					{/* <Link href="#">
						<a>Read more</a>
					</Link> */}
				</div>
				<div>
					<h2>What is Active Invest?</h2>
					<p>
						Active Invest is an Advisory plus Investment Platform - where you can buy,
						sell and hold stocks. You get expert analysis on each stock and personalized
						guidance to build and maintain your portfolio.
					</p>
					<p>
						Our in-house research division do their due diligence on each Halal stock.
						This ensures that your investments can have the advantage of an expert.
					</p>
					<p>
						You also get access to advanced tools to analyze a stock in-depth from
						fundamental and technical parameters.
					</p>

					<a>Read more</a>

					{/* <Link href="#">
						<a>Read more</a>
					</Link> */}
				</div>

				<div>
					<h2>Plans - Coming Soon</h2>
					<div>
						<div>
							<h3>Basic</h3>
							<CheckedList
								stmts={[
									"View the Complete List of Shar'ah compliant stocks",
									"Basic Screeners (5)",
									"Email alerts everytime a stock changes Shariah Compliant status",
									"Buy, Sell and Hold Stocks",
								]}
							/>
							<Link href="/stocks">
								<a>Continue</a>
							</Link>
						</div>

						<div>
							<h3>PRO</h3>
							<CheckedList
								stmts={[
									"All free features",
									"Personalised one-on-one sessions to discuss your portfolio",
									"Three new expert picks every week.",
									"Request forcast for any stocks (upto 10 per month)",
									"Advanced screeners 20+",
									"Hot stocks to watch out for",
								]}
							/>
							<Link href="/stocks">
								<a>Coming Soon</a>
							</Link>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
