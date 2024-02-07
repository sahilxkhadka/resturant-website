import FoodItem from "./FoodItem";

const ChefsRecommendations = () => {
	return (
		<>
			<p className='app__specialMenu-menu_heading'>Chef's Recommendations</p>
			<FoodItem />
			<FoodItem />
			<FoodItem />
			<FoodItem />
		</>
	);
};

export default ChefsRecommendations;
