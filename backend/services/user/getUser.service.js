import db from "../../db/connection.js";
class GetUserService {
    async getUser(data) {
        const { userId, email, mobile } = data;

        if (!userId && !email && !mobile) {
            return { success: false, message: "Please Provide All The Required Details", statusCode: 400 };
        }

        try {
            if (userId || email) {
                const [user] = await db.query("SELECT * FROM user WHERE email = ? OR userId = ?", [email, userId]);
                if (user.length) {
                    return { success: true, message: "User Details Fetched Successfully", statusCode: 200, data: user[0] };
                } else {
                    return { success: false, message: "User Not Found", statusCode: 404 };
                }

            } else if (mobile) {
                const [result] = await db.query("SELECT * FROM phone WHERE mobile = ?", [mobile]);
                if (!result.length) {
                    return { success: false, message: "User Not Found", statusCode: 404 };
                }
                const [user] = await db.query("SELECT * FROM user WHERE userId = ?", [result[0].userId]);
                if (user.length) {
                    return { success: true, message: "User Details Fetched Successfully", statusCode: 200, data: user[0] };
                } else {
                    return { success: false, message: "Unable To Fetch User Details", statusCode: 500 };
                }

            }
        } catch (error) {
            console.error("Error in fetching user details", error);
            return { success: false, message: "Unable To Fetch User Details", statusCode: 500 };
        }

    }
}

export default GetUserService;