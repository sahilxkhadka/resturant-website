import React from "react";

import "./App.css";
import { Navbar } from "./components";
import {
	AboutUs,
	Chef,
	FindUs,
	Footer,
	Gallery,
	Header,
	Laurels,
	SpecialMenu,
} from "./container";

const Home = () => (
	<div>
		<Navbar />
		<Header />
		<AboutUs />
		<SpecialMenu />
		<Chef />
		{/* <Intro /> */}
		<Laurels />
		<Gallery />
		<FindUs />
		<Footer />
	</div>
);

export default Home;
