import express from "express";
import { isAuthorize } from "../middlewares/auth.middleware.js";
import { getAllGym, getGym, addGym, updateGym, deleteGym } from "../controllers/gym.controller.js";

const router = express.Router();

router.get("/get/all", isAuthorize, getAllGym);
router.get("/get/:id", isAuthorize, getGym);
router.post("/add", isAuthorize, addGym);
router.put("/update/:id", isAuthorize, updateGym);
router.delete("/delete/:id", isAuthorize, deleteGym);

export default router;