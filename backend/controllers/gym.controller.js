import { catchAsyncError } from "../middlewares/catchAsyncError.middleware.js";
import ErrorHandler from "../utils/errorHandler.utils.js"
import { sendResponse } from "../utils/sendResponse.utils.js";
import AddGymService from "../services/gym/addGym.service.js";
import GetAllGymService from "../services/gym/getAllGym.service.js"
import GetGymService from "../services/gym/getGym.service.js";


export const getAllGym = catchAsyncError(async (req, res, next) => {
    const getAllGymService = new GetAllGymService();

    const {success, message, statusCode, data } = await getAllGymService.getAllGym(req.body);
    
    if(!success){
        return next(new ErrorHandler(message, statusCode));
    }
    sendResponse(res ,message, statusCode , data);
})

export const getGym = catchAsyncError(async(req, res ,next )=>{
    const getGymService = new GetGymService();

    const {success, message, statusCode, data } = await getGymService.getGym(req.body);
    
    if(!success){
        return next(new ErrorHandler(message, statusCode));
    }
    sendResponse(res ,message, statusCode , data);
})


export const addGym = catchAsyncError(async(req, res ,next )=>{
    const addGymService = new AddGymService();

    const {success, message, statusCode, data } = await addGymService.addGym(req.body);
    
    if(!success){
        return next(new ErrorHandler(message, statusCode));
    }
    sendResponse(res ,message, statusCode , data);
})



export const updateGym = catchAsyncError(async(req, res ,next )=>{
    
})

export const deleteGym = catchAsyncError(async(req, res ,next )=>{
    
})

