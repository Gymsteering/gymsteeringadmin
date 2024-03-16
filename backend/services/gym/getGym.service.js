import db from "../../db/connection.js";

class GetGymService {
    async getGym(data) {
        try {
            const { id } = data;
            if(!id){
                return { success: false , message: "Please Provide Required Details", statusCode: 400};
            }
            const [result] = await db.query("SELECT * FROM gym WHERE id = ?", [id]);
            if(!result.length){
                return { success: false, message: "Gym Not Found", statusCode: 404 };
            }
            return { success: true, data: result[0] , message: "Gym Details Fetched Successfully", statusCode: 200 }
        } catch (error) {
            return { success: false, message: "Failed To Fetch Gym Details", statusCode: 500 };
        }
    }
}

export default GetGymService; 