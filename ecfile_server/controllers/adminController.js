import Admin from "../models/adminModel.js";
import bcrypt from "bcrypt";

//test api for admin signup
export const adminSignup = async (req, res) => {
	const { email, password } = req.body;
	const salt = await bcrypt.genSalt(10);
	const newPass = await bcrypt.hash(password, salt);
	const admin = new Admin({ email, password: newPass });
	admin.save();
	res.status(201).json({ message: "admin signup success" });
};

export const adminLogin = async (req, res) => {};
