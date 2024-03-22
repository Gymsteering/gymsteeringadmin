import db from "../../db/connection.js";
import { getResetPasswordToken, hashPassword } from "../../utils/password.utils.js";
import { sendMail } from "../../utils/sendMail.utils.js";
import crypto from "crypto";


class ForgotPasswordService {
    async forgotPassword(req, data) {
        const { email } = data;
        
        if (!email) {
            return { success: false, message: "Please Provide The Required Details", statusCode: 400 };
        }

        const [user] = await db.query("SELECT * FROM user WHERE email = ? AND role = ? LIMIT 1", [email, 'A']);

        if (!user.length) {
            return { success: false, message: "User Not Found", statusCode: 400 };
        }

        try {
            var { resetToken, resetPasswordToken, resetPasswordExpire } = await getResetPasswordToken();
            console.log(resetPasswordExpire)
            await db.query("UPDATE user SET resetPasswordToken = ?, resetPasswordExpire = ? WHERE id = ?", [resetPasswordToken, resetPasswordExpire, user[0].id]);

        } catch (error) {
            return { success: false, message: "Server Side Error", statusCode: 400 };
        }

        const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/auth/password/reset/${resetToken}`;
        const message = `Your password reset Token is : \n\n ${resetPasswordUrl} \n\n If you did not request this email then, Please ignore it`
        try {
            await sendMail({
                email: user[0].email,
                subject: "Password Recovery",
                message
            })
        } catch (error) {
            await db.query("UPDATE user SET resetPasswordToken = ?, resetPasswordExpire = ? WHERE id = ?", [null, null, user[0].id]);
            return { success: false, message: error.message, statusCode: 500 };
        }

        return { success: true, message: `Email sent to ${user[0].email} successfully`, statusCode: 200 };
    }

    async resetPassword(req, data) {
        const { newPassword ,token } = data;

        if (!token || !newPassword) {
            return { success: false, message: "Please Provide The Required Details", statusCode: 400 };
        }

        const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");

        const [user] = await db.query("SELECT * FROM user WHERE resetPasswordToken = ? AND resetPasswordExpire > ?", [resetPasswordToken, Date.now()]);

        if (!user.length) {
            return { success: false, message: "Link Is Invalid Or Expire" };
        }
        console.log(user[0]);
        
        try {
            const hashedPassword = await hashPassword(newPassword);
            console.log(hashedPassword);
            await db.query("UPDATE user SET password = ? ,resetPasswordToken = ?, resetPasswordExpire = ? WHERE id = ?", [hashedPassword, null, null, user[0].id]);
        } catch (error) {
            return { success: false, message: "Server Side Error", statusCode: 500 };
        }

        return { success: true, message: "Password Updated Successfully", statusCode: 201 };
    }
}




export default ForgotPasswordService;