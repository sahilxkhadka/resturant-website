import breakfast from "../assets/breakfast.png";
import lunch from "../assets/lunch.png";
import dinner from "../assets/dinner.png";
import special from "../assets/special.png";
import foodItem from "../assets/fooditem.png";

export const menuCategories = [
	{
		title: "BreakFast",
		url: "/menu-list/breakfast",
		image: breakfast,
	},
	{
		title: "Lunch",
		url: "/menu-list/lunch",
		image: lunch,
	},
	{
		title: "Dinner",
		url: "/menu-list/dinner",
		image: dinner,
	},
	{
		title: "Special",
		url: "/menu-list/special",
		image: special,
	},
];

export const chefsRecommendations = [
	{
		name: "Mutton Khana Set",
		price: 400,
		description: "Special Mutton Khana Set",
		photo: foodItem,
	},
	{
		name: "Cooker Jhol Momo",
		price: 400,
		description: "Special Cooker Jhol Momo",
		photo: foodItem,
	},
	{
		name: "Chicken sekuwa",
		price: 400,
		description: "Chicken sekuwa",
		photo: foodItem,
	},
];

export const menuItems = {
	breakfast: [
		{
			title: "Breakfast 1",
			price: "Rs. 100",
			tags: "AU | Bottle",
		},
		{
			title: "Breakfast 2",
			price: "$59",
			tags: "AU | Bottle",
		},
		{
			title: "La Vieillw Rose",
			price: "$44",
			tags: "FR | 750 ml",
		},
		{
			title: "Rhino Pale Ale",
			price: "$31",
			tags: "CA | 750 ml",
		},
		{
			title: "Irish Guinness",
			price: "$26",
			tags: "IE | 750 ml",
		},
	],
	lunch: [
		{
			title: "Lunch 1",
			price: "$56",
			tags: "AU | Bottle",
		},
		{
			title: "Catena Malbee",
			price: "$59",
			tags: "AU | Bottle",
		},
		{
			title: "La Vieillw Rose",
			price: "$44",
			tags: "FR | 750 ml",
		},
		{
			title: "Rhino Pale Ale",
			price: "$31",
			tags: "CA | 750 ml",
		},
		{
			title: "Irish Guinness",
			price: "$26",
			tags: "IE | 750 ml",
		},
	],
	dinner: [
		{
			title: "Dinner 1",
			price: "$56",
			tags: "AU | Bottle",
		},
		{
			title: "Dinner 2",
			price: "$59",
			tags: "AU | Bottle",
		},
		{
			title: "La Vieillw Rose",
			price: "$44",
			tags: "FR | 750 ml",
		},
		{
			title: "Rhino Pale Ale",
			price: "$31",
			tags: "CA | 750 ml",
		},
		{
			title: "Irish Guinness",
			price: "$26",
			tags: "IE | 750 ml",
		},
	],
	special: [
		{
			title: "Special 1",
			price: "$56",
			tags: "AU | Bottle",
		},
		{
			title: "Catena Malbee",
			price: "$59",
			tags: "AU | Bottle",
		},
		{
			title: "La Vieillw Rose",
			price: "$44",
			tags: "FR | 750 ml",
		},
		{
			title: "Rhino Pale Ale",
			price: "$31",
			tags: "CA | 750 ml",
		},
		{
			title: "Irish Guinness",
			price: "$26",
			tags: "IE | 750 ml",
		},
	],
};
