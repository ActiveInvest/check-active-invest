import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from '../../components/footer'
import styles from "../../styles/stockInfo.module.scss";

let stocks = {};

for (const s of require("../../public/stockList.json")) {
	if (s.BSE) stocks[`BSE:${s.BSE}`] = s.Name;
	if (s.NSE) stocks[`NSE:${s.NSE}`] = s.Name;
}

export default function stockInfo({ data: { symbol, name } }) {
	const [exchange, ticker] = symbol.split(":");
	const [quantity, setQuantity] = useState(1);
	const [buyOrSell, setBuyOrSell] = useState("buy");

	const tradingviewContainer = useRef(null);
	const technicalContainer = useRef(null);
	const overviewContainer = useRef(null);
	const profileContainer = useRef(null);
	const graphContainer = useRef(null);

	useEffect(() => {
		const tradingviewScript = document.createElement("script");
		tradingviewScript.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
		tradingviewScript.async = true;
		tradingviewScript.innerHTML = JSON.stringify({
			symbol,
			colorTheme: "light",
			isTransparent: false,
			largeChartUrl: "",
			displayMode: "regular",
			width: "100%",
			height: 840,
			locale: "en",
			container_id: "tradingview_widget",
		});

		const profileScript = document.createElement("script");
		profileScript.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
		profileScript.async = true;
		profileScript.innerHTML = JSON.stringify({
			symbol,
			width: "100%",
			height: 840,
			colorTheme: "light",
			isTransparent: false,
			locale: "en",
			container_id: "profile_widget",
		});

		const technicalScript = document.createElement("script");
		technicalScript.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
		technicalScript.async = true;
		technicalScript.innerHTML = JSON.stringify({
			interval: "1M",
			width: "100%",
			isTransparent: false,
			height: 450,
			symbol,
			showIntervalTabs: true,
			locale: "en",
			colorTheme: "light",
			container_id: "technical_widget",
		});

		const overviewScript = document.createElement("script");
		overviewScript.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
		overviewScript.async = true;
		overviewScript.innerHTML = JSON.stringify({
			symbol,
			width: "100%",
			locale: "en",
			colorTheme: "light",
			isTransparent: false,
			container_id: "overview_widget",
		});

		tradingviewContainer.current.appendChild(tradingviewScript);
		// graphContainer.current.appendChild(graphScript);
		profileContainer.current.appendChild(profileScript);
		technicalContainer.current.appendChild(technicalScript);
		overviewContainer.current.appendChild(overviewScript);

		const kiteConnectScript = document.createElement("script");
		kiteConnectScript.src = "https://kite.trade/publisher.js?v=3";
		kiteConnectScript.async = true;
		document.head.appendChild(kiteConnectScript);

		const TVScript = document.createElement("script");
		TVScript.src = "https://s3.tradingview.com/tv.js";
		document.head.appendChild(TVScript);

		TVScript.onload = () => {
			new TradingView.MediumWidget({
				symbols: [[ticker]],
				chartOnly: true,
				width: "100%",
				height: "100%",
				locale: "en",
				colorTheme: "light",
				gridLineColor: "#F0F3FA",
				trendLineColor: "#2196F3",
				fontColor: "#787B86",
				underLineColor: "#E3F2FD",
				isTransparent: false,
				autosize: true,
				container_id: "tradingview_735f8",
			});
		};

		return () => {
			tradingviewContainer.current.removeChild(tradingviewScript);
			tradingviewContainer.current.innerHTML = null;

			// graphContainer.current.removeChild(graphScript);
			graphContainer.current.innerHTML = null;

			technicalContainer.current.removeChild(technicalScript);
			technicalContainer.current.innerHTML = null;

			overviewContainer.current.removeChild(overviewScript);
			overviewContainer.current.innerHTML = null;

			profileContainer.current.removeChild(profileScript);
			profileContainer.current.innerHTML = null;

			document.head.removeChild(kiteConnectScript);
			document.head.removeChild(TVScript);
		};
	}, []);

	const handleSumbit = (e) => {
		e.preventDefault();
		KiteConnect.ready(() => {
			const kite = new KiteConnect("vxzyr0aqju54f9a8");

			kite.add({
				exchange,
				tradingsymbol: ticker,
				transaction_type: buyOrSell.toUpperCase(),
				order_type: "MARKET",
				quantity: quantity,
			});

			const newWindow = window.open("", "", "width=800,height=600");
			if (window.focus) {
				newWindow.focus();
			}
			newWindow.document.body.innerHTML = kite.html();
			newWindow.document.body.querySelector("form").submit();
		});
	};

	return (
		<>
			
			<Head>
				<title>Stock Info - {ticker}</title>
			</Head>
			<Nav />
			<div id="main" className={styles.container}>
				<div id="overview_widget" ref={overviewContainer} />
				<div id="tradingview_735f8" ref={graphContainer} />
				<div className={styles.subContainer}>
					<div
						className={styles.topRow}
						id="tradingview_widget"
						ref={tradingviewContainer}
					/>
					<div className={styles.topRow} id="profile_widget" ref={profileContainer} />
				</div>
				<div className={styles.subContainer}>
					<div
						id="technical_widget"
						className={styles.technical_widget + " " + styles.topRow}
						ref={technicalContainer}
					/>
					<form className={styles.form + " " + styles.topRow}>
						<p>Share Quantity</p>
						<input
							type="number"
							min={1}
							required
							value={quantity}
							onChange={(e) => setQuantity(Number(e.target.value))}
						/>
						<p>Buy / Sell</p>
						<select value={buyOrSell} onChange={(e) => setBuyOrSell(e.target.value)}>
							<option value="buy">Buy</option>
							<option value="sell">Sell</option>
						</select>
						<span className={styles.button} onClick={handleSumbit}>
							Trade
						</span>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
}

export const getStaticProps = (context) => {
	const { symbol } = context.params;
	return {
		props: {
			data: { symbol, name: stocks[symbol] },
		},
	};
};

export const getStaticPaths = () => {
	return {
		paths: Object.keys(stocks).map((s) => ({ params: { symbol: s } })),
		fallback: false,
	};
};
