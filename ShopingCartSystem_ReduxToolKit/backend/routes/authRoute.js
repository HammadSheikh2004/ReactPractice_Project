import express from "express";
import auth from "../controller/authController.js";
const router = express.Router();


router.post("/register", auth.register);
router.post("/signin", auth.signin);



export default router;