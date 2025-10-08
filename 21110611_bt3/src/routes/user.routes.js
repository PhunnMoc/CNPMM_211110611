import express from "express";
import { register, login, home } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/home", verifyToken, home);

export default router;
