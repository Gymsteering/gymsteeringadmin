import jwt from "jsonwebtoken";

export const sendToken = async(message, res, statusCode, user) =>{
    
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
    // error prone ?

    const options = {
        expires: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        message: message,
        result: user
    })
}

