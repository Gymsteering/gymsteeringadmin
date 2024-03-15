import express from "express";
import { isAuthorize } from "../middlewares/auth.middleware.js";
import { getAllCustomer, getCustomer, addCustomer, updateCustomer, deleteCustomer } from "../controllers/customer.controller";

const router = express.Router();

router.get("/all", isAuthorize, getAllCustomer);
router.get("/:id", isAuthorize, getCustomer);
router.post("/add", isAuthorize, addCustomer);
router.put("/:id", isAuthorize, updateCustomer);
router.delete("/:id", isAuthorize, deleteCustomer);

export default router;