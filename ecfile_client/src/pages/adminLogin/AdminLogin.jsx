import React, { useState } from "react";
import "./adminLogin.css";
import {
	TextField,
	Box,
	InputAdornment,
	OutlinedInput,
	IconButton,
	InputLabel
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";

import { useFormik } from "formik";
import * as Yup from "yup";
import { adminLogin } from "../../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminLogin = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			password: Yup.string().required("Password required")
		}),
		onSubmit: (values, { resetForm }) => {
			adminLogin(values)
				.then((res) => {
					resetForm({ values: "" });
					navigate("/admin/home");
				})
				.catch((err) => {
					toast.error(err.response.data.message);
				});
		}
	});

	return (
		<div className="form__main">
			<h1>Admin Login</h1>
			<form noValidate onSubmit={formik.handleSubmit}>
				<Box sx={{ marginBottom: "0.5rem" }}>
					<InputLabel>Email</InputLabel>
					<OutlinedInput
						id="outlined-adornment-email"
						style={{ width: "300px" }}
						label="Email"
						name="email"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className="formik__error" style={{ color: "red" }}>
							{formik.errors.email}
						</div>
					) : null}
				</Box>
				<Box>
					<InputLabel>Password</InputLabel>
					<OutlinedInput
						style={{ width: "300px" }}
						id="outlined-adornment-password"
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									edge="end">
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label="Password"
						name="password"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
				</Box>
				{formik.touched.password && formik.errors.password ? (
					<div className="formik__error" style={{ color: "red" }}>
						{formik.errors.password}
					</div>
				) : null}
				<Box sx={{ marginTop: "0.5rem" }}>
					<button className=" login__button">
						<span>Login</span>
					</button>
				</Box>
			</form>
		</div>
	);
};

export default AdminLogin;
