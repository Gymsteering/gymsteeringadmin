import db from "../../db/connection.js";
import { sendMail } from "../../utils/sendMail.utils.js";

class AddGymService {
    async addGym(data) {
        const { name, location, startDate, userId, email } = data;
        console.log(data);

        if (!name || !location || !startDate || !userId || !email) {
            return { success: false, message: "Please Provide All The Required Details", statusCode: 400 };
        }

        try {

            const [owner] = await db.query("SELECT * FROM owner WHERE userId = ?", [userId]);

            if (!owner.length) {
                return { success: false, message: "Something Went Wrong", statusCode: 400 };
            }

            const [gym] = await db.query("INSERT INTO gym (name, location , startDate , ownerId, id) VALUES( ? , ? , ? , ?, ?)", [name, location, startDate, owner[0].id, 1]);

            const emailData = {
                email: email,
                message: `Congratulations as your New GYM  \n\n ${gym.name} \n\n has been registered successfully. \n\n If it is not registered by you then contact us.`,
                subject: `GYM Registered Successfully`
            }

            try {
                // taking time
                await sendMail(emailData);
            } catch (error) {
                console.log('Error in sending email', error);
                return { success: false, message: "Failed To Send Mail", statusCode: 500 };
            }

            return { success: true, message: "Gym Added Successfully", statusCode: 201, data: gym };


        } catch (error) {
            console.error('Error in adding gym', error);
        }


    }

}

export default AddGymService;