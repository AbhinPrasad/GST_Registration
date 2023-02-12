import nodeMailer from "nodemailer";
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

export const sendEmail = async (email, message) => {
	console.log(email, "email");
	console.log(message, "message");
	try {
		const info = await tranporter.sendMail({
			from: process.env.FROM_EMAIL,
			to: email,
			subject: "GST Payment status",
			text: message
		});
		console.log("Message sent: %s", info.messageId);
	} catch (err) {
		console.log(err);
	}
};
