import { catchAsyncError } from "../middlewares/catchAsyncError.middleware.js";
import ErrorHandler from "../utils/errorHandler.utils.js"
import { sendResponse } from "../utils/sendResponse.utils.js";
import GetAllCustomerService from "../services/customer/getAllCustomers.service.js";


export const getAllCustomer = catchAsyncError(async (req, res, next) => {
    const getAllCustomerService = new GetAllCustomerService();

    const { success, message , statusCode, data} = await getAllCustomerService.getAllCustomer();

    if(!success){
        return next(new ErrorHandler(message, statusCode));
    }

    sendResponse(res ,message, statusCode , data);
})

export const getCustomer = catchAsyncError(async(req, res ,next )=>{

})

export const addCustomer = catchAsyncError(async(req, res ,next )=>{
    
})

export const updateCustomer = catchAsyncError(async(req, res ,next )=>{
    
})

export const deleteCustomer = catchAsyncError(async(req, res ,next )=>{
    
})

