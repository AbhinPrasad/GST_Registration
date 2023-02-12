import express from "express";
import { adminLogin, adminSignup } from "../controllers/adminController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", adminSignup); //test_route
router.post("/login", adminLogin);

export default router;
