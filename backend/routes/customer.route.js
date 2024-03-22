import express from "express";
import { isAuthorize } from "../middlewares/auth.middleware.js";
import { getAllCustomer, getCustomer, addCustomer, updateCustomer, deleteCustomer, sendOTPToCustomer, verifyOTPCustomer } from "../controllers/customer.controller.js";

const router = express.Router();

router.get("/all", isAuthorize, getAllCustomer);
router.get("/:id", isAuthorize, getCustomer);
router.post("/add", isAuthorize, addCustomer);
router.put("/:id", isAuthorize, updateCustomer);
router.get("/otp/send", isAuthorize, sendOTPToCustomer);
router.post("/otp/verify", isAuthorize, verifyOTPCustomer);
router.delete("/:id", isAuthorize, deleteCustomer);

export default router;