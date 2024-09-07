import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import CategoryList from "./CategoryList";
import MenuList from "./MenuList";

const App = () => (
	<Router>
		<Routes>
			{/* <Route path='/' element={<Home />} /> */}
			<Route path='/' element={<MenuList />} />
			<Route path='/:category' element={<CategoryList />} />
		</Routes>
	</Router>
);

export default App;
