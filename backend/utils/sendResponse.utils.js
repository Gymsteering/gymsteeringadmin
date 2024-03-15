
export const sendResponse = async (res, message, statusCode, data) => {

    res.status(statusCode).json({
        success: true,
        message: message,
        data: data
    })
}

