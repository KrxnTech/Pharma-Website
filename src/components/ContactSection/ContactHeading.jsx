import "./ContactHeading.css"
import ContactMainCompo from "./ContactMainCompo";
export default function ContactHeading() {
    return (
        <>
            <div className="ContactMainDiv">
                <h1 className="Heading">Contact <b style={{ color: "#2E8B57", paddingLeft: "5px", fontWeight: "600" }}>Us</b></h1>
                <p className="Para">Get in touch with our team for product inquiries quotes or partnership opportunities</p>
            </div>

            <ContactMainCompo />

        </>

    )
}