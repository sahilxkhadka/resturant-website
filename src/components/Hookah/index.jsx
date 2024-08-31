import foodItem from "../../assets/hookah.png";
import "./index.css";

const Hookah = () => {
	return (
		<>
			<p className='app__specialMenu-menu_heading'>Hookah</p>
			<div className='fooditem-container'>
				<div className='fooditem-image'>
					<img src={foodItem} alt='' style={{ objectFit: "contain" }} />
					<div className='fooditem-price'>
						<span>Rs.</span> 450
					</div>
				</div>
				<p className='fooditem-name headtext__cormorant'>Special Hookah</p>
				<p className='fooditem-info p__opensans'>Mint Flavor</p>
			</div>
			<p className='fooditem-info p__opensans mrp-message'>
				7 % Extra MRP on all alcoholic beverages
			</p>
		</>
	);
};

export default Hookah;
