import express from "express"
const router = express.Router()

router.post("/send", (req, res) => {
    const ForData = req.body
    console.log("Received Form Data")
    console.log(ForData)


    res.status(200).json({
        success: true,
        message: "Form Data Received SuccessFully"
    })
})


export default router