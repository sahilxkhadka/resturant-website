import breakfast from "../assets/breakfast.png";
import coldDrinks from "../assets/colddrinks.png";
import dinner from "../assets/dinner.png";
import lunch from "../assets/lunch.png";
import momo from "../assets/momo.png";
import special from "../assets/special.png";

import chickenSekuwa from "../assets/chicken-sekuwa.jpg";
import cookermomo from "../assets/cooker-momo.jpg";
import muttonKhanaSet from "../assets/mutton-khana-set.jpg";

export const menuCategories = [
	{
		title: "Snacks",
		url: "/menu-list/snacks",
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
		title: "Momo",
		url: "/menu-list/momo",
		image: momo,
	},
	{
		title: "Drinks",
		url: "/menu-list/drinks",
		image: coldDrinks,
	},
	{
		title: "Others",
		url: "/menu-list/others",
		image: special,
	},
];

export const chefsRecommendations = [
	{
		name: "Mutton Khana Set",
		price: 440,
		description: "Special Mutton Khana Set",
		photo: muttonKhanaSet,
	},
	{
		name: "Cooker Jhol Momo (2 Plts)",
		price: 500,
		description: "Special Cooker Jhol Momo",
		photo: cookermomo,
	},
	{
		name: "Chicken Sekuwa (1kg)",
		price: 900,
		description: "Chicken sekuwa",
		photo: chickenSekuwa,
	},
];

export const menuItems = {
	snacks: [
		{
			title: "Chicken Chilli Boneless",
			price: "Rs 350",
			// tags: "AU | Bottle",
		},
		{
			title: "Chicken Sadeko",
			price: "Rs 350",
			// tags: "AU | Bottle",
		},
		{
			title: "Chicken Sekuwa (1kg)",
			price: "Rs 900",
			// tags: "FR | 750 ml",
		},
		{
			title: "Buff Sekuwa (1kg)",
			price: "$31",
			// tags: "CA | 750 ml",
		},
		{
			title: "Mutton Sekuwa (1kg)",
			price: "Rs 1800",
			// tags: "IE | 750 ml",
		},
		{
			title: "Mutton Sekuwa (1kg)",
			price: "Rs 1800",
			// tags: "IE | 750 ml",
		},
		{
			title: "Chicken Timur",
			price: "Rs 350",
			// tags: "IE | 750 ml",
		},
		{
			title: "Aalu Timur",
			price: "Rs 200",
			// tags: "IE | 750 ml",
		},
		{
			title: "Bhatmas/Peanuts Sandeko",
			price: "Rs 1800",
			// tags: "IE | 750 ml",
		},
		{
			title: "Fruit Salad",
			price: "Rs 250",
			// tags: "IE | 750 ml",
		},
		{
			title: "Green Salad",
			price: "Rs 200",
			// tags: "IE | 750 ml",
		},
		{
			title: "Veg Pakoda",
			price: "Rs 220",
			// tags: "IE | 750 ml",
		},
		{
			title: "Paneer Chilli",
			price: "Rs 380",
			// tags: "IE | 750 ml",
		},
		{
			title: "Mushroom Chilli",
			price: "Rs 300",
			// tags: "IE | 750 ml",
		},
		{
			title: "Cashew Nut Chicken",
			price: "Rs 400",
			// tags: "IE | 750 ml",
		},
		{
			title: "Wings Fry",
			price: "Rs 80",
			// tags: "IE | 750 ml",
		},
		{
			title: "Sausage Fry",
			price: "Rs 70",
			// tags: "IE | 750 ml",
		},
		{
			title: "Buff Chilli",
			price: "Rs 350",
			// tags: "IE | 750 ml",
		},
		{
			title: "Mustang Aalo 250",
			price: "Rs 250",
			// tags: "IE | 750 ml",
		},
		{
			title: "Sukuti Sadeko",
			price: "Rs 350",
			// tags: "IE | 750 ml",
		},
	],
	lunch: [
		{
			title: "Hyakula Fry",
			price: "Rs 450",
			// tags: "AU | Bottle",
		},
		{
			title: "Tauko Fry",
			price: "Rs 350",
			// tags: "AU | Bottle",
		},
		{
			title: "Bhutan Fry",
			price: "Rs 250",
			// tags: "FR | 750 ml",
		},
		{
			title: "Pangra Fry",
			price: "Rs 250",
			// tags: "CA | 750 ml",
		},
		{
			title: "Mix Veg Boil",
			price: "Rs 250",
			// tags: "IE | 750 ml",
		},
		{
			title: "Veg Sotey",
			price: "Rs 300",
			// tags: "IE | 750 ml",
		},
		{
			title: "Mutton Sotey",
			price: "Rs 475",
			// tags: "IE | 750 ml",
		},
		{
			title: "Chicken Sotey",
			price: "Rs 375",
			// tags: "IE | 750 ml",
		},
		{
			title: "Mutton Chiura",
			price: "Rs 380",
			// tags: "IE | 750 ml",
		},
		{
			title: "Chicken Chiura",
			price: "Rs 280",
			// tags: "IE | 750 ml",
		},
	],
	dinner: [
		{
			title: "Mutton Khana | Dhido",
			price: "Rs 440",
			// tags: "AU | Bottle",
		},
		{
			title: "Chicken Khana | Dhido",
			price: "Rs 320",
			// tags: "AU | Bottle",
		},
		{
			title: "Local Khana | Dhido",
			price: "Rs 360",
			// tags: "FR | 750 ml",
		},
		{
			title: "Veg Khana | Dhido",
			price: "Rs 220",
			// tags: "CA | 750 ml",
		},
	],
	others: [
		{
			title: "Chicken Thukpa",
			price: "Rs 200",
			// tags: "AU | Bottle",
		},
		{
			title: "Mis Thukpa",
			price: "Rs 275",
			// tags: "AU | Bottle",
		},
		{
			title: "Veg Thukpa",
			price: "Rs 170",
			// tags: "FR | 750 ml",
		},
		{
			title: "Aalo Paratha",
			price: "Rs 70",
			// tags: "CA | 750 ml",
		},
		{
			title: "Keema Paratha",
			price: "Rs 150",
			// tags: "IE | 750 ml",
		},
		{
			title: "Chicken Chowmein | Fry Rice",
			price: "Rs 200",
			// tags: "IE | 750 ml",
		},
		{
			title: "Mixed Chowmein | Fry Rice",
			price: "Rs 275",
			// tags: "IE | 750 ml",
		},
		{
			title: "Egg Chowmein | Fry Rice",
			price: "Rs 180",
			// tags: "IE | 750 ml",
		},
		{
			title: "Veg Chowmein | Fry Rice",
			price: "Rs 150",
			// tags: "IE | 750 ml",
		},
		{
			title: "Chicken Keema Noodle",
			price: "Rs 250",
			// tags: "IE | 750 ml",
		},
	],
	steam: [
		{
			title: "Chicken",
			price: "Rs 200",
			// tags: "AU | Bottle",
		},
		{
			title: "Buff",
			price: "Rs 200",
			// tags: "AU | Bottle",
		},
		{
			title: "Vegetable",
			price: "Rs 160",
			// tags: "FR | 750 ml",
		},
		{
			title: "Paneer",
			price: "Rs 300",
			// tags: "CA | 750 ml",
		},
	],
	fried: [
		{
			title: "Chicken",
			price: "Rs 230",
			// tags: "AU | Bottle",
		},
		{
			title: "Buff",
			price: "Rs 230",
			// tags: "AU | Bottle",
		},
		{
			title: "Vegetable",
			price: "Rs 180",
			// tags: "FR | 750 ml",
		},
		{
			title: "Paneer",
			price: "Rs 330",
			// tags: "CA | 750 ml",
		},
	],
	jhol: [
		{
			title: "Chicken",
			price: "Rs 230",
			// tags: "AU | Bottle",
		},
		{
			title: "Buff",
			price: "Rs 230",
			// tags: "AU | Bottle",
		},
		{
			title: "Vegetable",
			price: "Rs 180",
			// tags: "FR | 750 ml",
		},
		{
			title: "Paneer",
			price: "Rs 330",
			// tags: "CA | 750 ml",
		},
	],
	cold: [
		{
			title: "Red Bull(Blue)",
			price: "Rs 350",
			// tags: "AU | Bottle",
		},
		{
			title: "Red Bull(Red)",
			price: "Rs 200",
			// tags: "AU | Bottle",
		},
		{
			title: "Cold Drinks",
			price: "Rs 75",
			// tags: "FR | 750 ml",
		},
		{
			title: "Mineral Water",
			price: "Rs 45",
			// tags: "CA | 750 ml",
		},
		{
			title: "Banana Lassi",
			price: "Rs 175",
			// tags: "CA | 750 ml",
		},
		{
			title: "Sweet Lassi",
			price: "Rs 130",
			// tags: "CA | 750 ml",
		},
	],
	hot: [
		{
			title: "Milk Coffee",
			price: "Rs 100",
			// tags: "AU | Bottle",
		},
		{
			title: "Black Coffee",
			price: "Rs 80",
			// tags: "AU | Bottle",
		},
		{
			title: "Milk Tea",
			price: "Rs 50",
			// tags: "FR | 750 ml",
		},
		{
			title: "Black Tea",
			price: "Rs 40",
			// tags: "CA | 750 ml",
		},
		{
			title: "Hot Lemon & Honey",
			price: "Rs 130",
			// tags: "CA | 750 ml",
		},
	],
};
