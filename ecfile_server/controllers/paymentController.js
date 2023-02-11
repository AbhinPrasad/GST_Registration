import User from "../models/userModel.js";
import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

const instance = new Razorpay({
	key_id: process.env.KEY_ID,
	key_secret: process.env.KEY_SECRET
});

export const initiatePayment = async (req, res) => {
	const { companyName, phone, email, aadhaar, pan, option } = req.body;

	if (!companyName || !phone || !email || !aadhaar || !pan || !option) {
		res.status(404);
		throw new Error("Add all fields");
	}
	const service = option.name;
	const amount = option.price;

	try {
		// ORDER CREATION
		const options = {
			amount: amount * 100, // amount in the smallest currency unit
			currency: "INR",
			receipt: "order_rcptid_11"
		};
		instance.orders.create(options, function (err, order) {
			res.status(201).json(order);
		});
	} catch (error) {
		res.status(400).json(error);
	}
};
