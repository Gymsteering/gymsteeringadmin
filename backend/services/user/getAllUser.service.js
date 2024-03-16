import db from "../../db/connection.js";
class GetAllUserService {
    async getAllUser(data) {
        const { role } = data;

        if (!role) {
            return { success: false, message: "Please Provide All The Required Details", statusCode: 400 };
        }

        try {
                const [users] = await db.query("SELECT * FROM user WHERE role = ?", [role]);
                if (users.length) {
                    return { success: true, message: "Users Fetched Successfully", statusCode: 200, data: users };
                } else {
                    return { success: false, message: "Users Not Found", statusCode: 404 };
                }
        } catch (error) {
            console.error("Error in fetching users", error);
            return { success: false, message: "Unable To Fetch Users", statusCode: 500 };
        }

    }
}

export default GetAllUserService;