import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorMiddleware.js";
import paymentRoute from "./routes/paymentRoute.js";
import adminRoute from "./routes/adminRoute.js";

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use("/api/payment", paymentRoute);
app.use("/api/admin", adminRoute);

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`.green));
