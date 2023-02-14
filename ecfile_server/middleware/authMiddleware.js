import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";

const protect = async (req, res, next) => {
	console.log("start");
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		console.log("haaaaaaaaaaaaa");
		try {
			token = req.headers.authorization.split(" ")[1];
			console.log(token, "token");
			const decoded = jwt.verify(token, process.env.JWT_KEY);
			console.log(decoded, "decoded");
			req.admin = await Admin.findById(decoded.id).select("-password");
			next();
		} catch (error) {
			res.status(401).json({ message: "Unauthorised" });
		}
	}

	if (!token) {
		res.status(401).json({ message: "Not authorized, no token" });
	}
};

export default protect;
