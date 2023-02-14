import express from "express";
import { adminLogin,getData } from "../controllers/adminController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", adminLogin);
router.get("/data",getData)

export default router;
