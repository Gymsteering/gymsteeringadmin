import db from "../../db/connection.js";
import { generatePassword, hashPassword } from "../../utils/password.utils.js";
import { generateOTP } from "../../utils/generateOTP.utils.js";
import { sendMail } from "../../utils/sendMail.utils.js";


class VerifyCustomerService {
    async sendOTP(data) {
        const { email } = data;

        if (!email) {
            return { success: false, message: "Please Provide All The Required Details", statusCode: 400 };
        }

        try {
            const [user] = await db.query("SELECT * FROM user WHERE email = ? LIMIT 1", [email]);
            if (!user.length) {
                return { success: false, message: "Email Does Not Exist", statusCode: 400 };
            }

            const { otp, expiry } = generateOTP();
            await db.query("UPDATE user SET otp = ?, otpExpiry = ? WHERE id = ?", [otp, expiry, user[0].id]);

            const message = `Your request are requested for registering new gym to GYMSteering, \n\n ${otp} \n\n. If you did not request then don't share the otp with anyone and contact us`;

            try {
                await sendMail({
                    email: user[0].email,
                    subject: "Request For New GYM Registration",
                    message
                })
            } catch (error) {
                console.error('Error in sending otp', error);
                await db.query("UPDATE user SET otp = ?, otpExpiry = ? WHERE id = ?", [NULL, NULL, user[0].id]);

                return { success: false, message: error.message, statusCode: 500 };
            }

            return { success: true, message: "OTP Sent To Email Successfully", statusCode: 200 };

        } catch (error) {
            console.error('Error in sending otp', error);

            return { success: false, message: "Server Side Error", statusCode: 500 };
        }
    }

    async verifyOTP(data) {
        const { email, otp } = data;

        if (!email || !otp) {
            return { success: false, message: "Please Provide All The Required Details", statusCode: 400 };
        }

        try {
            const [user] = await db.query("SELECT * FROM user WHERE email = ? AND otp = ?  AND otpExpiry > ?", [email, otp, Date.now()]);

            if (!user.length) {
                return { success: false, message: "Invalid OTP", statusCode: 400 };
            }

            await db.query("UPDATE user SET otp = ? , otpExpiry = ? WHERE id = ?", [NULL, NULL, user[0].id]);

            return { success: true, message: "OTP Verified Successfully", statusCode: 200, data: user[0] };

        } catch (error) {
            console.error("error in verifying OTP", error);
            return { success: false, message: "Server Side Error" };
        }

    }
}