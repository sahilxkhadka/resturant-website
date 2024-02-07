import foodItem from "../../assets/fooditem.png";
import "./index.css";

const FoodItem = () => {
	return (
		<div className='fooditem-container'>
			<div className='fooditem-image'>
				<img src={foodItem} alt='' />
				<div className='fooditem-price'><span>Rs.</span> 180</div>
			</div>
			<p className='fooditem-name headtext__cormorant'>Chicken Chaumein</p>
			<p className='fooditem-info p__opensans'>Chicken, Cheese and Pineapple</p>
		</div>
	);
};

export default FoodItem;
