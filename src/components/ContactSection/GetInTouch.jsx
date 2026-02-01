import "./GetInTouch.css"
export default function GetInTouch() {
    return (
        <div className="GetInTouch">
            <h2 className="GetTitle">Get In Touch</h2>
            <p className="ParaGetInTouch">Our team is ready to assist you with any questions about our pharmaceutical chemical products and services.</p>
            <div className="FourBox">
                <div className="DivInner">
                    <div><i className="fa-solid fa-location-dot Icon"></i></div>
                    <div>
                        <p className="GetInTouchInnerInfoTitle">Address</p>
                        <p className="RealInfoInnerPara">Plot No.914 Phase-2 GIDC Chhatral - 383739 Ta : Kalol Dist GandhiNagar</p>
                    </div>
                </div>
                <div className="DivInner">
                    <div><i class="fa-regular fa-envelope Icon"></i></div>
                    <div>
                        <p className="GetInTouchInnerInfoTitle">Email</p>
                        <p className="RealInfoInnerPara">Gulkas440@gmail.com</p>
                        <p className="RealInfoInnerPara">gulkas001@gmail.com</p>
                    </div>
                </div>
                <div className="DivInner">
                    <div><i class="fa-solid fa-phone Icon"></i></div>
                    <div>
                        <p className="GetInTouchInnerInfoTitle">Phone</p>
                        <p className="RealInfoInnerPara">+91 98985 27683</p>
                    </div>
                </div>
                <div className="DivInner">
                    <div><i class="fa-regular fa-alarm-clock Icon"></i></div>
                    <div>
                        <p className="GetInTouchInnerInfoTitle">Business Hours</p>
                        <p className="RealInfoInnerPara">Tuesday - Sunday 9:00 AM - 6:00 PM</p>
                        <p className="RealInfoInnerPara">Saturday 9:00 AM - 1:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}