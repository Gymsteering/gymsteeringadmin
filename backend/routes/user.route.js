import express from "express";
import { isAuthorize } from "../middlewares/auth.middleware.js";
import { getAllUser , getUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/all", isAuthorize, getAllUser);
router.get("/", isAuthorize, getUser);

export default router;