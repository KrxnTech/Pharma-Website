import "./Map.css"
export default function MapLocation() {
    return (
        <div className="MapDiv">
            <h1 className="MapHeading">Our Location</h1>
            <p className="MapPara">Visit our Manufacturing facility</p>
            <div className="IframeDiv">
                <iframe className="Iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.1672365079075!2d72.44476717548994!3d23.286660906421076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c244214655915%3A0x699df9afceff978!2sGulkas%20Pharma%20Private%20Limited!5e1!3m2!1sen!2sin!4v1769929263633!5m2!1sen!2sin"
                    width="1000"
                    height="600"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}