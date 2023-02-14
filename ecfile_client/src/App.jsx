import React from "react";
import { Home, AdminLogin, AdminHome } from "./pages/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./auth/ProtectedRoute";
import PublicRoute from "./auth/PublicRoute";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/admin/login"
					element={
						<PublicRoute>
							<AdminLogin />
						</PublicRoute>
					}
				/>
				<Route
					path="/admin/home"
					element={
						<ProtectedRoute>
							<AdminHome />
						</ProtectedRoute>
					}
				/>
			</Routes>
			<Toaster />
		</BrowserRouter>
	);
};

export default App;
