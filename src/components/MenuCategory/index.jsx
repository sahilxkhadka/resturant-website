import SubHeading from "../SubHeading/SubHeading";
import breakfast from "../../assets/breakfast.png";
import SearchFood from "./SearchFood";
import "./index.css";

const MenuCategory = () => {
	return (
		<>
			<div className='menu-list-wrapper'>
				<SearchFood />
				<h2 className='headtext__cormorant'>Categories</h2>
				<div className='categories-container'>
					<div className='menu-category-container'>
						<SubHeading title={"BreakFast"} />
						<div className='category-image'>
							<img src={breakfast} alt='' />
						</div>
						<div className='circle-right'></div>
					</div>
					<div className='menu-category-container'>
						<SubHeading title={"BreakFast"} />
						<div className='circle-right'></div>
					</div>
					<div className='menu-category-container'>
						<SubHeading title={"BreakFast"} />
						<div className='circle-right'></div>
					</div>
					<div className='menu-category-container'>
						<SubHeading title={"BreakFast"} />
						<div className='circle-right'></div>
					</div>
					<div className='menu-category-container'>
						<SubHeading title={"BreakFast"} />
						<div className='circle-right'></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MenuCategory;
