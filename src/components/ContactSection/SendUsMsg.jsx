import { useState } from "react"
import "./SendUsMsg.css"
import { input } from "framer-motion/client"
import { Form } from "react-router-dom"
export default function SendUsMsg() {
    const [FormData, setFormData] = useState({
        FullName: "",
        PhoneNumber: "",
        EmailAddress: "",
        CompanyName: "",
        Message: "",
    })

    const HandleFormData = (e) => {
        setFormData((currValue) => {
            return {
                ...currValue, [e.target.name]: e.target.value
            }
        })
    }

    const ShowSendMsg = (e) => {
        alert("Msg Send Successfully")
        setFormData({
            FullName: "",
            PhoneNumber: "",
            EmailAddress: "",
            CompanyName: "",
            Message: "",
        })
    }

    const HandleSubmitEvent = async (e) => {
        e.preventDefault()
        // SENDING DATA IN BACKEND ( DATA IS FORM DATA )
        try {
            const Responce = await fetch("http://localhost:5000/api/contact/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(FormData)
            })

            const Data = await Responce.json()
            console.log(Data)

            console.log(FormData)
            setFormData({
                FullName: "",
                PhoneNumber: "",
                EmailAddress: "",
                CompanyName: "",
                Message: "",

            })

        } catch (error) {
            console.log("Error in Sending Form Data", error)
        }

    }
    return (
        <div className="FormOuterMain">
            <h1 className="SendMsgTitle">Send us a Message</h1>
            <form onSubmit={HandleSubmitEvent}>
                <div className="FormInnerDiv">
                    <div className="FormLeftDiv">
                        <label className="Labels" htmlFor="FullName">Full Name</label>
                        <br />
                        <input
                            onChange={HandleFormData}
                            type="text"
                            id="FullName"
                            placeholder="Your Full Name"
                            name="FullName"
                            value={FormData.FullName} />
                        <br />
                        <label className="Labels" htmlFor="PhoneNumber">Phone Number</label>
                        <br />
                        <input
                            type="text"
                            onChange={HandleFormData}
                            id="PhoneNumber"
                            placeholder="+91 999 000 000 0"
                            name="PhoneNumber"
                            value={FormData.PhoneNumber} />
                    </div>
                    <div className="FormRightDiv">
                        <label className="Labels" htmlFor="EmailAddress">Email Address</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Your@gmail.com"
                            onChange={HandleFormData}
                            id="EmailAddress"
                            name="EmailAddress"
                            value={FormData.EmailAddress} />
                        <br />
                        <label className="Labels" htmlFor="CompanyName">Company Name</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Your Company"
                            onChange={HandleFormData}
                            id="CompanyName"
                            name="CompanyName"
                            value={FormData.CompanyName}
                        />
                    </div>
                </div>
                <div className="TextMsgArea">
                    <label className="MessageLabel" htmlFor="Message">Message</label>
                    <br />
                    <textarea
                        className="TextArea"
                        name="Message"
                        id="Message"
                        value={FormData.Message}
                        onChange={HandleFormData}
                        cols="80"
                        rows="10"
                        placeholder="Tell us about your requirements products inquries or any questions..."></textarea>
                </div>
                <button onClick={ShowSendMsg} className="SendButtonMsg"><i className="SendButtonIcon fa-regular fa-paper-plane"></i>Send Message</button>
            </form>
        </div>
    )
}