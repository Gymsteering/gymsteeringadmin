import db from "../db/connection.js";
import { comparePassword } from "../utils/password.utils.js";
class LoginService {
    async login(data) {
        const { email, password } = data;

        if (!email || !password) {
            return { success: false, message: "Please Provide The Required Details", statusCode: 400 };
        }

        const [result] = await db.query("SELECT * FROM user WHERE email = ?", [email]);

        if (!result.length) {
            return { success: false, message: "Email Or Password Does Not Match", statusCode: 400 };
        }

        try {
            var isAuthorize = await comparePassword(password, result[0].password);
            if (!isAuthorize) {
                return { success: false, message: "Email Or Password Does Not Match", statusCode: 400 };
            }
        } catch (error) {
            return { success: false, message: "Email Or  Does Not Match", statusCode: 400 };
        }

        return { success: true, message: "Logged In Successfully", statusCode: 200, user: result[0] };
    }
}

export default LoginService;