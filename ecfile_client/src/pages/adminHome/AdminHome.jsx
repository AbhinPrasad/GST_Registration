import React, { useEffect } from "react";
import { fetchData } from "../../api";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		localStorage.clear();
		navigate("/admin/login");
	};

	return (
		<Box>
			<AppBar position="static">
				<Toolbar
					sx={{
						flexGrow: 1,
						display: "flex",
						justifyContent: "flex-end"
					}}>
					<Button
						sx={{ justifySelf: "flex-end" }}
						color="inherit"
						onClick={handleClick}>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default AdminHome;
