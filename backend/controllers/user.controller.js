import GetAllUserService from "../services/user/getAllUser.service.js";
import GetUserService from "../services/user/getUser.service.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.middleware.js";
export const getAllUser = catchAsyncError(async (req, res, next) => {
    const getAllUserService = new GetAllUserService();

    const { success, message , statusCode, data} = await getAllUserService.getAllUser(req.body);

    if(!success){
        return next(new ErrorHandler(message, statusCode));
    }

    sendResponse(res ,message, statusCode , data);
})

export const getUser = catchAsyncError(async (req, res, next) => {
    const getUserService = new GetUserService();

    const { success , message , statusCode , data} = await getUserService.getUser(req.body);

    if(!success){
        return next(new ErrorHandler(message, statusCode));
    }

    sendResponse(res ,message, statusCode , data);

})