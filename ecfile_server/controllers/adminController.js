import Admin from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

export const adminLogin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400).json({ message: "Add all fields" });
	}

	const admin = await Admin.findOne({ email });

	if (admin) {
		const checkPassword = await bcrypt.compare(password, admin.password);
		if (checkPassword) {
			res.status(200).json({
				id: admin._id,
				token: generateToken(admin._id)
			});
		} else {
			res.status(401)
			throw new Error("Wrong Password")
		}
	} else {
		res.status(401)
		throw new Error("Email not found");
	}
});

export const getData = asyncHandler(async(req,res)=>{
	res.json("hey")
})

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_KEY, {
		expiresIn: "5h"
	});
};
