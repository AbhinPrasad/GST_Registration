import User from "../models/userModel.js";
import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.KEY_ID);
const instance = new Razorpay({
	key_id: process.env.KEY_ID,
	key_secret: process.env.KEY_SECRET
});
export const initiatePayment = async (req, res) => {
	const { companyName, phone, email, aadhaar, pan, option } = req.body;

	const service = option.name;
	const amount = option.price;

	// ORDER CREATION
    var options = {
        amount: amount ,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        res.json(order)
      });
};
