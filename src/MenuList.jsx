import React from "react";
import { Navbar, MenuCategory } from "./components";
import ChefsRecommendations from "./components/ChefRecommendations";
import Hookah from "./components/Hookah";

const MenuList = () => {
	return (
		<div className='app__bg menu-wrapper'>
			<Navbar />
			<MenuCategory />
			<ChefsRecommendations />
			<Hookah />
		</div>
	);
};

export default MenuList;
