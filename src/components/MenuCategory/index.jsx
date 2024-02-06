import SearchFood from "./SearchFood";
import "./index.css";

const MenuCategory = () => {
	return (
		<>
			<SearchFood />
			<div className='menu-list-wrapper'>
				<h2>Categories</h2>
				<div className='menu-category-container'>
					<p>BreakFast</p>
					<div className='circle-right'></div>
				</div>
			</div>
		</>
	);
};

export default MenuCategory;
