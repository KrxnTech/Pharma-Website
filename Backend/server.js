import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()

// SETTING THE MIDDLEWARES 
app.use(cors())
app.use(express.json())

// TESTING ROUTE
app.get("/", (req, res) => {
    res.send("Our Backend Server is Running Successfully")
})

// ROUTES 
import contactRoutes from "./routes/contact.routes.js"
app.use("/api/contact", contactRoutes)

// START THE SERVER 
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})


