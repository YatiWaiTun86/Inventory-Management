// import { errorHandler } from "./middleware/error.handler.js";
import express from "express";
import connectDb from "../config/db.js";
import cors from "cors";
// import { checkAccessToken } from "./middleware/check.user.js";

// Routes
import Routes from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

connectDb();
app.use("/api/v1", Routes);
// app.use(errorHandler);

export default app;
