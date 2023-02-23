import express from "express";
import {
	confirmPayment,
	initiatePayment
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/process-payment", initiatePayment);
router.post("/confirm-payment", confirmPayment);

export default router;

