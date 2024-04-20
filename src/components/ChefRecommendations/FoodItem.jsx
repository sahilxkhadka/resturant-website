import "./index.css";

const FoodItem = ({ foodItemInfo }) => {
	return (
		<div className='fooditem-container'>
			<div className='fooditem-image'>
				<img src={foodItemInfo.photo} alt='' />
				<div className='fooditem-price'>
					<span>Rs.</span> {foodItemInfo.price}
				</div>
			</div>
			<p className='fooditem-name headtext__cormorant'>{foodItemInfo.name}</p>
			<p className='fooditem-info p__opensans'>{foodItemInfo.description}</p>
		</div>
	);
};

export default FoodItem;
