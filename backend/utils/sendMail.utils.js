import nodeMailer from "nodemailer"

export const sendMail = async ({ email, subject, message }) => {

    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_MAIL_HOST || "smtp.gmail.com",
        port: process.env.SMTP_MAIL_PORT || "465",
        service: process.env.SMTP_MAIL_SERVICE || "gmail",
        auth: {
            user: process.env.SMTP_MAIL || "jajtech07@gmail.com",
            pass: process.env.SMTP_PASSWORD || "nqig nmsd ecuj zoqm"
        }
    })

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: subject,
        text: message
    }
    await transporter.sendMail(mailOptions)

}
