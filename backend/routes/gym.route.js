import express from "express";
import { isAuthorize } from "../middlewares/auth.middleware.js";
import { getAllGym, getGym, addGym, updateGym, deleteGym } from "../controllers/gym.controller.js";

const router = express.Router();

router.get("/all", isAuthorize, getAllGym);
router.get("/:id", isAuthorize, getGym);
router.post("/add", isAuthorize, addGym);
router.put("/:id", isAuthorize, updateGym);
router.delete("/:id", isAuthorize, deleteGym);

export default router;