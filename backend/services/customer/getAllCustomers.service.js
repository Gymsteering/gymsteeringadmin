import db from "../../db/connection.js";

// should i use try-catch and class ?

class GetAllCustomerService {
    async getAllCustomer() {
        try {
            const [result] = await db.query("SELECT * FROM gym");
            return { success: true, data: result, message: "All Customer Fetched Successfully", statusCode: 200 }
        } catch (error) {
            return { success: false, message: "Failed To Fetch Customers", statusCode: 500 };
        }
    }
}

export default GetAllCustomerService; 