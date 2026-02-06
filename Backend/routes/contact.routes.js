import express from "express"
import transporter from "../config/mailer.js"
const router = express.Router()

router.post("/send", async (req, res) => {
    const {
        FullName,
        PhoneNumber,
        EmailAddress,
        CompanyName,
        Message,
    } = req.body

    console.log("Received Form Data")

    try {
        await transporter.sendMail({
            from: `"Website Contact <${process.env.EMAIL_USER}>"`,
            to: process.env.EMAIL_USER,
            replyTo: EmailAddress,
            subject: "New Contact Form Message",
            html: `
            <h2> New Message from Website</h2>
            <p> Full Name : ${FullName} </p>
            <p> Phone Number : ${PhoneNumber} </p>
            <p> Email Address : ${EmailAddress} </p>
            <p> Company Name : ${CompanyName} </p>
            <p> Message : ${Message} </p>
            `
        })

        res.status(200).json({
            success: true,
            message: "Email Sent successfully"
        })
    } catch (err) {
        console.error("Email Error : ", err)

        res.status(500).json({
            success: false,
            message: "Failed to send email"
        })
    }
})


export default router