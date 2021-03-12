import Head from "next/head";
import Link from "next/link";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import classes from "../../styles/index.module.scss";
import stocksClasses from "../../styles/stocks.module.scss";
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const Stock = ({ Name, BSE, NSE }) => {
	return (
		<li className={stocksClasses.stockListItem}>
			<h2>{Name}</h2>
			<div>
				{BSE ? <a href={`/stocks/BSE:${BSE}`}>BSE:&nbsp;{BSE}</a> : <a> - </a>}
				{NSE ? <a href={`/stocks/NSE:${NSE}`}>NSE:&nbsp;{NSE} </a> : <a> - </a>}
			</div>
		</li>
	);
};

const getSearcher = (obj, text) => (field) =>
	obj
		.filter((s) => !!s[field] && s[field].toLowerCase().includes(text))
		.map((s) => ({ s, i: s[field].toLowerCase().indexOf(text) }))
		.sort((a, b) => a.i - b.i)
		.map((s) => s.s);

export default function Stocks({ stocks }) {
	const stockListRef = useRef(null);
	const [searchResult, setSearchResult] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const [arrowHidden, setArrowHidden] = useState(true);

	const handleArrowClick = () => {
		stockListRef.current.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	const handleScroll = () => {
		if (
			stockListRef.current.scrollTop >
			stockListRef.current.firstElementChild.offsetHeight * 1.5
		) {
			if (arrowHidden) setArrowHidden(false);
		} else if (!arrowHidden) {
			setArrowHidden(true);
		}
	};

	const handleSearch = (e) => {
		let text = e.target.value;
		if (!text) {
			setIsSearching(false);
			setSearchResult([]);
			return;
		}
		text = text.toLowerCase().trim();
		const result = [];
		const searchField = getSearcher(stocks, text);
		result.push(...searchField("BSE"));
		result.push(...searchField("NSE"));
		result.push(...searchField("Name"));
		setSearchResult([...new Set(result)]);
		setIsSearching(true);
	};

	return (
		<>
			<Head>
				<title>Halal Stocks - Active Invest</title>
			</Head>
			<Navbar />
			<div className={stocksClasses.wrapper}>
				
				<input placeholder="Search 1300+ Halal Stocks" onChange={handleSearch} />
				<ul ref={stockListRef} className={stocksClasses.stockList} onScroll={handleScroll}>
					{(() => {
						const ss = isSearching ? searchResult : stocks;
						return ss.map((s) => <Stock {...s} key={`${s.BSE}${s.NSE}`} />);
					})()}
				</ul>
				<span onClick={handleArrowClick} style={{ opacity: arrowHidden ? 0 : "" }}>
					<FontAwesomeIcon size="2x" icon={faArrowUp} />
				</span>
			</div>
			<Footer />
		</>
	);
}

export const getStaticProps = () => {
	const stocks = require("../../public/stockList.json");
	return {
		props: {
			stocks,
		},
	};
};
