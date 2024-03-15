import ErrorHandler from "../utils/errorHandler.utils.js"
import { catchAsyncError } from "./catchAsyncError.middleware.js";
import jwt from "jsonwebtoken";
import db from "../db/connection.js";


export const isAuthorize = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) { return next(new ErrorHandler("Please Login To Access", 401)) };
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedData) { return next(new ErrorHandler("Please Login To Access", 401)) };

    const [result] = await db.query("SELECT * FROM user WHERE userId = ?", [decodedData.id]);

    if (!result.length || result[0].role !== "A") {
        return next(new ErrorHandler("Please Login to access1", 401))
    }
    next();
});
