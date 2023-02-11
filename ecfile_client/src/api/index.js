import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const API = axios.create({ baseURL: BASE_URL });

export const initializePayment = async (userData) => {
	const response = await API.post("/payment", userData);
};
