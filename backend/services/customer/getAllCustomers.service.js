import db from "../../db/connection.js";
class GetAllCustomerService {
    async getAllCustomer() {

        try {
            const [users] = await db.query("SELECT * FROM user WHERE role = ?", ['O']);
            return { success: true, message: "Users Fetched Successfully", statusCode: 200, data: users };
        } catch (error) {
            console.error("Error in fetching users", error);
            return { success: false, message: "Unable To Fetch Users", statusCode: 500 };
        }
    }
}

export default GetAllCustomerService;