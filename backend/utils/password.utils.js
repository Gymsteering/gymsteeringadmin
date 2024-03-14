import crypto from "crypto";
import bcrypt from "bcrypt";

export const generatePassword = () => {
    try {
        const password = crypto.randomBytes(4).toString('hex')
        // console.log(password);

        return password;
    } catch (error) {
        throw error;
    }
}
export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password.toString(), saltRounds);
        return hashedPassword;
    } catch (error) {
        // console.error('Error hashing password:', error);
        throw error;
    }
};

export const comparePassword = async (password, hashedPassword) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword);

        return match;
    } catch (error) {
        // console.error('Error comparing passwords:', error);
        throw error
    }
};

export const getResetPasswordToken = async () => {
    try {
        const resetToken = crypto.randomBytes(20).toString("hex")
        const resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")
        const resetPasswordExpire = Date.now() + 10 * 60 * 1000;

        return { resetToken, resetPasswordToken, resetPasswordExpire };
    } catch (error) {
        // console.log("Error in generating reset password token ", error)
        throw error
    }
}

