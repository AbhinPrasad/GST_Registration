import nodeMailer from "nodemailer";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";
dotenv.config();

// const testAccount = await nodeMailer.createTestAccount();

const tranporter = nodeMailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.FROM_EMAIL,
		pass: process.env.FROM_PASSWORD
	}
});

export const sendEmail = asyncHandler(async (email, message) => {
	const info = await tranporter.sendMail({
		from: process.env.FROM_EMAIL,
		to: email,
		subject: "GST Payment status",
		text: message
	});
});
