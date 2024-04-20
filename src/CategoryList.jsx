import { useNavigate, useParams } from "react-router-dom";
import { MenuItem, SubHeading } from "./components";
import { data, images } from "./constants";

const CategoryList = () => {
	const params = useParams();
	console.log(params.category);
	const navigate = useNavigate();
	const handleBack = () => {
		navigate("/menu-list");
	};
	return (
		<div className='app__specialMenu_category_page_container'>
			<div
				className='app__specialMenu app__specialMenu_category_page  flex__center section__padding'
				id='menu'
			>
				<div className='app__specialMenu-title'>
					<SubHeading title='Local Khana' />
					<h1 className='headtext__cormorant'>Food Menu</h1>
				</div>
				<div className='app__specialMenu-menu'>
					<div className='app__specialMenu-menu_wine flex__center'>
						<p className='app__specialMenu-menu_heading'>
							{params.category.toUpperCase()}
						</p>
						<div className='app__specialMenu-menu_items'>
							{data.wines.map((wine, index) => (
								<MenuItem
									key={wine.title + index}
									title={wine.title}
									price={wine.price}
									tags={wine.tags}
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
