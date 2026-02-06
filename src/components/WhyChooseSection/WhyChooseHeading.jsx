import "./WhyChooseHeading.css"
import SixBoxChoose from "./WhyChooseSixBox"
export default function WhyChooseHeading() {
    return (
        <div className="HeadingWhyChooseDiv">
            <h1 className="WhyChooseHeading">Why Choose <b className="BoldName">Gulkas Pharma</b></h1>
            <p className="WhyChoosePara">Our commitment to excellence sets us apart in pharmaceutical chemical manufacturing</p>
            <SixBoxChoose />
        </div>
    )
}