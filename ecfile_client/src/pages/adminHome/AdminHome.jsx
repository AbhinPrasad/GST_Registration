import React, { useState, useEffect } from "react";
import { fetchData } from "../../api";
import { AppBar, Box, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const AdminHome = () => {
	const [userData, setUserData] = useState([]);
	const navigate = useNavigate();

	const handleClick = () => {
		localStorage.removeItem("token");
		navigate("/admin/login");
	};

	useEffect(() => {
		fetchData().then((res) => {
			console.log(res.data);
			setUserData(res.data);
		});
	}, []);

	const columns = [
		{ field: "id", headerName: "No", width: 90 },
		{ field: "NameOfCompany", headerName: "Name of Company", width: 190 },
		{ field: "service", headerName: "Type of Service", width: 190 },
		{ field: "status", headerName: "Status", width: 100 },
		{ field: "amount", headerName: "Amount", type: "number", width: 100 },
		{ field: "email", headerName: "Email", width: 230 },
		{ field: "phone", headerName: "Phone", width: 120 },
		{ field: "aadhaar", headerName: "Aadhaar", width: 190 },
		{ field: "pan", headerName: "PAN", width: 190 },
		{ field: "paymentId", headerName: "paymentId", width: 190 }
	];

	const rows = userData.map((user, index) => {
		return {
			id: index + 1,
			NameOfCompany: user.companyName,
			service: user.service,
			amount: user.amount,
			status: user.paymentStatus,
			email: user.email,
			phone: user.phone,
			aadhaar: user.aadhaar,
			pan: user.pan,
			paymentId: user.paymentId
		};
	});

	return (
		<Box>
			<AppBar position="static">
				<Toolbar
					sx={{
						flexGrow: 1,
						display: "flex",
						justifyContent: "flex-end"
					}}>
					<button onClick={handleClick}>
						<span class="box">Logout</span>
					</button>
				</Toolbar>
			</AppBar>
			<div style={{ height: 400, width: "100%", marginTop: "25px" }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
				/>
			</div>
		</Box>
	);
};

export default AdminHome;
