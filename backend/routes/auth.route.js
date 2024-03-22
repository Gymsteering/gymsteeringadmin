import express from "express";

const router = express.Router();

import {register, login, logout, forgotPassword, resetPassword} from '../controllers/auth.controller.js'

router.post("/register",register);
router.post("/login", login);
router.put("/logout",logout)
router.get("/password/forgot", forgotPassword)
router.post("/password/reset/:token", resetPassword)

export default router;