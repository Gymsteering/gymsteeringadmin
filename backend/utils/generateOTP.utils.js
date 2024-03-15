export const generateOTP = () => {
    try {

        const otp = Math.floor(1000 + Math.random() * 9000);
        const expiry = Date.now() + 5 * 60 * 1000;

        return { otp, expiry };

    } catch (error) {
        throw error;
    }
}