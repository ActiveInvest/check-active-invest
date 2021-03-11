import Link from "next/link";
import styles from "./nav.module.scss";

const Nav = () => (
	<>

	<nav className={styles.topNav}>
		<Link href="/">
			<a className={styles.logoContainer}>
				<img src="/images/logo.svg" />
				<h1 className={styles.logoText}>Active&nbsp;Invest</h1>
			</a>
		</Link>
		<ul className={styles.navLinks}>
			<li>
				<Link href="/about">
					<a>About</a>
				</Link>
			</li>
			<li>
				<Link href="/contact">
					<a>Contact</a>
				</Link>
			</li>
			<li>
				<Link href="/stocks">
					<a>Get&nbsp;Started</a>
				</Link>
			</li>
		</ul>
	</nav>
	</>
);

export default Nav;
