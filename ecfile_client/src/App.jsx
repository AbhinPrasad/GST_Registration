import React from "react";
import { Home, AdminLogin, AdminHome } from "./pages/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/admin" element={<AdminLogin />} />
				<Route path="/admin/home" element={<AdminHome />} />
			</Routes>
			<Toaster />
		</BrowserRouter>
	);
};

export default App;
