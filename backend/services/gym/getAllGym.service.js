import db from "../../db/connection.js";

// should i use try-catch and class ?

class GetAllGymService {
    async getAllGym(data) {
        try {
            const { ownerId } = data;
            if (ownerId) {
                const [result] = await db.query("SELECT * FROM gym WHERE ownerId = ?", [ownerId]);
                return { success: true, data: result, message: "All Gym Fetched Successfully", statusCode: 200 }
            } else {
                const [result] = await db.query("SELECT * FROM gym");
                return { success: true, data: result, message: "All Gym Fetched Successfully", statusCode: 200 }
            }
        } catch (error) {
            console.error("Error in fetching gym", error);
            return { success: false, message: "Failed To Fetch Gym", statusCode: 500 };
        }
    }
}

export default GetAllGymService; 