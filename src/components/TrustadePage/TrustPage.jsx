import "./Trust.css"
import { useNavigate } from "react-router-dom"
export default function TrustPage() {
    const navigate = useNavigate()
    return (
        <div className="TrustPageDetailDiv">
            <h1 className="HeadingTrustPage">
                Trusted by <span id="InnerTextHeading">Pharmaceutical</span> Leaders
            </h1>
            {/* <p className="ParaTrustPage">We proudly collaborate with leading pharmaceutical organizations, ensuring consistent quality, strict regulatory compliance, and reliable chemical manufacturing across <b style={{ fontWeight: "500" }}>domestic and international markets</b>.</p> */}
            <div className="TagDiv" onClick={() => navigate("/Contact")}>
                <a className="Trustbuildingtag">Start a Trusted Pharmaceutical Collaboration Today</a>
            </div>
        </div>
    )
}