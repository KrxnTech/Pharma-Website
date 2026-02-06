import "./Right.css"
export default function RightPartner() {
    return (
        <div className="RightMainDiv">
            <div className="SingleDivFirst">
                <i class="fa-solid fa-book"></i>
                <h3 className="RightTitle">Product Catalog</h3>
                <p className="RightTitlePara">Complete list of available chemicals with specifications</p>
            </div>
            <div className="SingleDiv">
                <i class="fa-solid fa-phone"></i>
                <h3 className="RightTitle">Technical Support</h3>
                <p className="RightTitlePara">Expert assistance for your specific requirements</p>
            </div>
        </div>
    )
}