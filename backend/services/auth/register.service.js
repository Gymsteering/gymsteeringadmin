import db from "../../db/connection.js";
import { generatePassword, hashPassword } from "../../utils/password.utils.js";
import { sendMail } from "../../utils/sendMail.utils.js";

class RegisterService {

    async register(data) {
        const { name, gender, email, DOB, address, FPId, phone1, phone2 } = data;

        if (!name || !email || !DOB || !gender || !address || !FPId || !phone1) {
            return { success: false, message: "Please Provide The Required Details", statusCode: 400 };
        }

        try {
            const [resultForEmail] = await db.query("SELECT * FROM user WHERE email = ? LIMIT 1", [email]);
            if (resultForEmail.length) {
                return { success: false, message: "Email Already Exist", statusCode: 400 };
            }
            const [resultForPhone1] = await db.query("SELECT * FROM phone WHERE phone1 = ? OR phone2 = ? LIMIT 1", [phone1]);
            if (resultForPhone1) {
                return { success: false, message: "Phone Number 1 Already Exist", statusCode: 400 };
            }
            if (phone2) {
                const [resultForPhone2] = await db.query("SELECT * FROM phone WHERE phone1 = ? OR phone2 = ? LIMIT 1", [phone2]);
                if (resultForPhone2) {
                    return { success: false, message: "Phone Number 2 Already Exist", statusCode: 400 };
                }
            }

        } catch (error) {
            console.log("error for register", error)
            return { success: false, message: "Server Side Error", statusCode: 500 };
        }

        try {
            var password = generatePassword();
            var hashedPassword = await hashPassword(password);
        } catch (error) {
            return { success: false, message: "Server Side Error", statusCode: 500 };
        }

        try {
            const [user] = await db.query("INSERT INTO user (name, email , gender , DOB, password , address , role, FPId ) VALUES (?,?,?,?,?,?,?,?)", [name, email, gender, DOB, hashedPassword, address, "A", FPId]);
            await db.query("INSERT INTO admin (userId) VALUES (?)", [user.insertId]);
        } catch (error) {
            if (user?.insertId) {
                await db.query("DELETE FROM user WHERE id = ?", [user.insertId])
            }

            return { success: false, message: "Failed To Register user", statusCode: 500 };
        }

        const emailData = {
            email: email,
            message: `Your temporary password is: ${password}`,
            subject: `Login Credentials`
        }

        try {
            // taking time
            await sendMail(emailData);
        } catch (error) {
            return { success: false, message: "Failed To Send Credentials To Mail", statusCode: 500 };
        }

        return { success: true, message: "Registered Successfully", statusCode: 201 };
    }

}



export default RegisterService