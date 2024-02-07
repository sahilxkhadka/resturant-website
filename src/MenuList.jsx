import React from "react";
import { Navbar, MenuCategory } from "./components";
import ChefsRecommendations from "./components/ChefRecommendations";

const MenuList = () => {
	return (
		<div className='app__bg menu-wrapper'>
			<Navbar />
			<MenuCategory />
			<ChefsRecommendations />
		</div>
	);
};

export default MenuList;
