import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MenuItem } from "./components";
import { menuItems } from "./constants/menulits";

const CategoryList = () => {
	const [momoCategory, setmomoCategory] = useState("steam");
	const [drinksCategory, setDrinksCategory] = useState("cold");

	const navigate = useNavigate();
	const params = useParams();
	console.log("🚀 ~ CategoryList ~ params:", params);
	if (!params.category) {
		navigate("/menu-list");
	}
	const currentCategory = params.category ?? "breakfast";

	const filteredMenuItems =
		params.category === "momo"
			? menuItems[momoCategory]
			: params.category === "drinks"
			? menuItems[drinksCategory]
			: menuItems[currentCategory];

	const currentItems = filteredMenuItems ?? [];
	const handleBack = () => {
		navigate("/menu-list");
	};

	return (
		<div className='app__specialMenu_category_page_container'>
			<div
				className='app__specialMenu app__specialMenu_category_page  flex__center section__padding'
				id='menu'
			>
				{/* <div className='app__specialMenu-title'>
					<SubHeading title='Local Khana' />
					<h1 className='headtext__cormorant'>Food Menu</h1>
				</div> */}
				<div className='app__specialMenu-menu'>
					<div className='app__specialMenu-menu_wine flex__center'>
						<p className='app__specialMenu-menu_heading'>
							{params.category.toUpperCase()}
						</p>

						{currentCategory === "momo" && (
							<div className='momo_categories_container'>
								<button
									className={
										momoCategory === "steam"
											? "custom__button"
											: "momo_categories_button"
									}
									type='button'
									onClick={() => {
										setmomoCategory("steam");
									}}
								>
									Steam
								</button>
								<button
									className={
										momoCategory === "fried"
											? "custom__button"
											: "momo_categories_button"
									}
									type='button'
									onClick={() => {
										setmomoCategory("fried");
									}}
								>
									Fried / Kothe
								</button>
								<button
									className={
										momoCategory === "jhol"
											? "custom__button"
											: "momo_categories_button"
									}
									type='button'
									onClick={() => {
										setmomoCategory("jhol");
									}}
								>
									C / Jhol
								</button>
							</div>
						)}
						{currentCategory === "drinks" && (
							<div className='momo_categories_container'>
								<button
									className={
										drinksCategory === "cold"
											? "custom__button"
											: "momo_categories_button"
									}
									type='button'
									onClick={() => {
										setDrinksCategory("cold");
									}}
								>
									Cold
								</button>
								<button
									className={
										drinksCategory === "hot"
											? "custom__button"
											: "momo_categories_button"
									}
									type='button'
									onClick={() => {
										setDrinksCategory("hot");
									}}
								>
									Hot
								</button>
								{/* <button
									className={
										drinksCategory === "alcohol"
											? "custom__button"
											: "momo_categories_button"
									}
									type='button'
									onClick={() => {
										setDrinksCategory("alcohol");
									}}
								>
									C / Jhol
								</button> */}
							</div>
						)}

						<div className='app__specialMenu-menu_items'>
							{currentItems.map((item, index) => (
								<MenuItem
									key={item.title + index}
									title={item.title}
									price={item.price}
									tags={item.tags}
								/>
							))}
						</div>
					</div>

					{/* <div className='app__specialMenu-menu_img'>
					<img src={images.menu} alt='menu' />
				</div> */}
				</div>
				<div style={{ marginTop: "15px" }}>
					<button className='custom__button' type='button' onClick={handleBack}>
						Go Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default CategoryList;
