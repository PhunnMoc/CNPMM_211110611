import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/database.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

connectDb();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
