import Admin from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//test api for admin signup
export const adminSignup = async (req, res) => {
	const { email, password } = req.body;
	const salt = await bcrypt.genSalt(10);
	const newPass = await bcrypt.hash(password, salt);
	const admin = new Admin({ email, password: newPass });
	admin.save();
	res.status(201).json({ message: "admin signup success" });
};

export const adminLogin = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400).json({ message: "Add all fields" });
	}

	try {
		const admin = await Admin.findOne({ email });

		if (admin) {
			const checkPassword = await bcrypt.compare(password, admin.password);
			if (checkPassword) {
				console.log("hey");
				res.status(200).json({
					id: admin._id,
					token: generateToken(admin._id)
				});
			} else {
				res.status(401).json({ message: "Wrong Password" });
			}
		} else {
			res.status(404).json({ message: "email not found" });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const generateToken = (id) => {
	return jwt.sign({id}, process.env.JWT_KEY, {
		expiresIn: "5h"
	});
};
