import foodItem from "../../assets/hookah.png";
import "./index.css";

const Hookah = () => {
	return (
		<>
			<p className='app__specialMenu-menu_heading'>Hookah</p>
			<div className='fooditem-container'>
				<div className='fooditem-image'>
					<img src={foodItem} alt='' />
					<div className='fooditem-price'>
						<span>Rs.</span> 450
					</div>
				</div>
				<p className='fooditem-name headtext__cormorant'>Special Hookah</p>
				<p className='fooditem-info p__opensans'>
					Chicken, Cheese and Pineapple
				</p>
			</div>
		</>
	);
};

export default Hookah;
