import { chefsRecommendations } from "../../constants/menulits";
import FoodItem from "./FoodItem";

const ChefsRecommendations = () => {
	return (
		<>
			<p className='app__specialMenu-menu_heading'>Chef's Recommendations</p>
			{chefsRecommendations.map((reecommendedItem) => (
				<FoodItem key={reecommendedItem.name} foodItemInfo={reecommendedItem} />
			))}
		</>
	);
};

export default ChefsRecommendations;
