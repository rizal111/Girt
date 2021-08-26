import Head from "next/head";
import Feed from "../components/Feed.js";
import Leftbar from "../components/Leftbar.js";
import Header from "./../components/Header.js";
import Rightbar from "./../components/Rightbar.js";

export default function Home() {
	return (
		<div
			className="flex flex-col"
			style={{ backgroundColor: "#1e0035", minHeight: "100vh", color: "white" }}
		>
			<Head>
				<title>Girt</title>
			</Head>
			<Header />
			<main className="flex items-stretch">
				<Leftbar />
				<Feed />
				<Rightbar />
			</main>
		</div>
	);
}
