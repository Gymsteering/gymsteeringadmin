import { catchAsyncError } from "../middlewares/catchAsyncError.middleware.js";
import ErrorHandler from "../utils/errorHandler.utils.js"
import { sendResponse } from "../utils/sendResponse.utils.js";
import AddCustomerService from "../services/customer/addCustomer.service.js";
import VerifyCustomerService from "../services/customer/verifyCustomer.service.js"
import GetAllCustomerService from "../services/customer/getAllCustomers.service.js";
import GetCustomerService from "../services/customer/getCustomer.service.js";


export const getAllCustomer = catchAsyncError(async (req, res, next) => {
    const getAllCustomerService = new GetAllCustomerService();

    const {success, message, statusCode, data} = await getAllCustomerService.getAllCustomer();
    
    if(!success){
        return next(new ErrorHandler(message, statusCode));
    }
    sendResponse(res ,message, statusCode , data);
})

export const getCustomer = catchAsyncError(async(req, res ,next )=>{
    const getCustomerService = new GetCustomerService();

    const {success, message, statusCode, data} = await getCustomerService.getCustomer(req.body);
    
    if(!success){
        return next(new ErrorHandler(message, statusCode));
    }
    sendResponse(res ,message, statusCode , data);

})

export const sendOTPToCustomer = catchAsyncError(async(req, res, next)=>{
    const verifyCustomerService = new VerifyCustomerService();
    
    const {success, message, statusCode, data} = await verifyCustomerService.customerSendOTP(req.body);

    if(!success){
        return next(new ErrorHandler(message, statusCode));
    }
    sendResponse(res ,message, statusCode , data);
})


export const verifyOTPCustomer = catchAsyncError(async(req, res, next)=>{
    const verifyCustomerService = new VerifyCustomerService();

    const {success, message, statusCode, data} = await verifyCustomerService.customerVerifyOTP(req.body);

    if(!success){
        return next(new ErrorHandler(message, statusCode));
    }
    sendResponse(res ,message, statusCode , data);
})


export const addCustomer = catchAsyncError(async(req, res ,next )=>{
    const addCustomerService = new AddCustomerService();

    const {success, message, statusCode, data } = await addCustomerService.addCustomer(req.body);
    
    if(!success){
        return next(new ErrorHandler(message, statusCode));
    }
    sendResponse(res ,message, statusCode , data);
})

export const updateCustomer = catchAsyncError(async(req, res ,next )=>{
    
})

export const deleteCustomer = catchAsyncError(async(req, res ,next )=>{
    
})

