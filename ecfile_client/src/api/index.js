import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const API = axios.create({ baseURL: BASE_URL });

export const initializePayment = async (userData) => {
	const response = await API.post("/payment/process-payment", userData);
	return response;
};

export const confirmPayment = async (paymentDetails, userData) => {
	console.log(userData, "api");
	const response = await API.post("/payment/confirm-payment", [
		paymentDetails,
		userData
	]);
	console.log(response, "userclient");
};

export const adminLogin = async (loginData) => {
	const response = await API.post("/admin", loginData);
	console.log(response);
	return response;
};

export const fetchData = async () => {
	const response = await API.get("/admin/data");
	return response;
};
