import { useNavigate } from "react-router-dom"
import "./Left.css"
export default function LeftPartner() {
    let Navigate = useNavigate()

    let DownLoadcatalogue = () => {
        const Link = document.createElement('a')
        Link.href = "src/components/PartnerWithUsPage/Gulkas Pharma (MR Hasan).pdf"
        Link.download = "ProductCatalogue.pdf"
        Link.click()
    }



    return (
        <div className="LeftDiv">
            <h1 className="ReadytoPartnerTitle">Ready to Partner with Us?</h1>
            <p className="ReadytoPartnerPara">Download our complete product catalog or get in touch with <br /> our team for custom requirements and bulk orders.</p>
            <div className="ButtonDivPartner">
                <div>
                    <button className="ButtonDownload" onClick={DownLoadcatalogue}>Dowload Product catalogue</button>
                </div>
                <div>
                    <button className="ButtonDownload" onClick={() => Navigate("/Contact")}>Contact Us</button>
                </div>
            </div>
        </div>
    )
}