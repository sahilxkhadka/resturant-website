import SubHeading from "../SubHeading/SubHeading";
// import SearchFood from "./SearchFood";
import "./index.css";
import { menuCategories } from "../../constants/menulits";
import { NavLink } from "react-router-dom";

const MenuCategory = () => {
	return (
		<>
			<div className='menu-list-wrapper'>
				{/* <SearchFood /> */}
				<h2 className='headtext__cormorant'>Categories</h2>
				<div className='categories-container'>
					{menuCategories.map((menuItem, index) => (
						<div className='menu-category-container' key={index}>
							<NavLink to={menuItem.url}>
								<SubHeading title={menuItem.title} />
								<div className='category-image'>
									<img src={menuItem.image} alt='' />
								</div>
								<div className='circle-right'></div>
							</NavLink>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default MenuCategory;
