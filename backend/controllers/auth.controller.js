import { catchAsyncError } from "../middlewares/catchAsyncError.middleware.js";
import RegisterService from "../services/register.service.js";
import LoginService from "../services/login.service.js"
import ForgotPasswordService from "../services/forgotPassword.service.js"
import ErrorHandler from "../utils/errorHandler.utils.js"
import { sendToken } from "../utils/sendToken.utils.js";

export const register = catchAsyncError(async (req, res, next) => {

    const registerService = new RegisterService()

    const { success, message, statusCode } = await registerService.register(req.body)

    if (!success) {
        return next(new ErrorHandler(message, statusCode));
    }

    res.status(statusCode).json({
        success,
        message
    })
    // sendToken(message, res, statusCode, user);
})

export const login = catchAsyncError(async (req, res, next) => {

    const loginService = new LoginService();

    const { success, message, statusCode, user } = await loginService.login(req.body)

    if (!success) {
        return next(new ErrorHandler(message, statusCode))
    }

    sendToken(message, res, statusCode, user)

})

export const logout = catchAsyncError(async (req, res, next) => {
    const options = {
        expires: new Date(Date.now()),
        httpOnly: true,
    }

    res.status(200).cookie("token", null, options).json({
        success: true,
        message: "Logout Successfully",
    })
})

export const forgotPassword = catchAsyncError(async (req, res, next) => {

    const forgotPasswordService = new ForgotPasswordService()

    const { success, message, statusCode } = await forgotPasswordService.forgotPassword(req, req.body);
    
    if (!success) {
        return next(new ErrorHandler(message, statusCode))
    }

    res.status(statusCode).json({
        success,
        message
    })
})

export const resetPassword = catchAsyncError(async (req, res, next) => {

    const forgotPasswordService = new ForgotPasswordService()

    const { success, message, statusCode } = await forgotPasswordService.resetPassword(req, {...req.body, ...req.params});

    if (!success) {
        return next(new ErrorHandler(message, statusCode))
    }

    res.status(statusCode).json({
        success,
        message
    })

})
