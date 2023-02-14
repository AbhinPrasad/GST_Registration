import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = (props) => {
	if (localStorage.getItem("token")) {
		return <Navigate to="/admin/home" />;
	} else {
		return props.children;
	}
};

export default PublicRoute;
