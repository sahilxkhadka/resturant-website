import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import MenuList from "./MenuList";

const App = () => (
	<Router>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/menu-list' element={<MenuList />} />
		</Routes>
	</Router>
);

export default App;
