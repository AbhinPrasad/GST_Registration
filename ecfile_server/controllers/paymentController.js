import User from "../models/userModel.js";
import Razorpay from "razorpay";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";
dotenv.config();
import { sendEmail } from "../services/nodeMailer.js";

const instance = new Razorpay({
	key_id: process.env.KEY_ID,
	key_secret: process.env.KEY_SECRET
});

export const initiatePayment = asyncHandler(async (req, res) => {
	const { companyName, phone, email, aadhaar, pan, option } = req.body;

	if (!companyName || !phone || !email || !aadhaar || !pan || !option) {
		res.status(400);
		throw new Error("Add all fields");
	}
	const amount = option.price;

	// ORDER CREATION
	const options = {
		amount: amount * 100, // amount in the smallest currency unit
		currency: "INR",
		receipt: "order_rcptid_11"
	};
	instance.orders.create(options, function (err, order) {
		res.status(201).json(order);
	});
});

export const confirmPayment = asyncHandler(async (req, res) => {
	const [paymentDetails, userData] = req.body;

	if (paymentDetails.error) {
		const message = paymentDetails.error.description;
		const user = new User({
			companyName: userData.companyName,
			service: userData.option.name,
			phone: userData.phone,
			email: userData.email,
			aadhaar: userData.aadhaar,
			pan: userData.pan,
			amount: userData.option.price,
			paymentId: paymentDetails.error.metadata.payment_id,
			paymentStatus: "failed"
		});

		sendEmail(userData.email, message);

		const success = await user.save();
		if (success) {
			res.status(201).json({ message: "Payment failed" });
		} else {
			res.status(400);
			throw new Error("Invalid user data");
		}
	} else {
		const message = `Your payment request for ${userData.option.name} of amount Rs.${userData.option.price} is successfull.`;
		const user = new User({
			companyName: userData.companyName,
			service: userData.option.name,
			phone: userData.phone,
			email: userData.email,
			aadhaar: userData.aadhaar,
			pan: userData.pan,
			amount: userData.option.price,
			paymentId: paymentDetails.razorpay_payment_id,
			paymentStatus: "success"
		});

		sendEmail(userData.email, message);

		const success = await user.save();
		if (success) {
			res.status(201).json({ message: "Payment successfull" });
		} else {
			res.status(400);
			throw new Error("Invalid user data");
		}
	}
});
