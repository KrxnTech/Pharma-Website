import "./AboutUsContent.css"
export default function AboutUsContent() {
    const style = {
        background: "linear-gradient(90deg, #0E8F7A 0%, #1F7AE0 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    }
    return (
        <div>
            <h1 className="About-GP">About <b>Gulkas Pharma</b></h1>
            <p className="about-content-paragraph"><b>Gulkas Pharma Pvt Ltd</b> was founded by a group of professionals
                with more than <b>30 years of experience</b> in the pharmaceutical
                industry With <b style={style}>advanced manufacturing equipment</b> and a <b >highly
                    experienced team</b> we deliver products that meet international quality
                standards Our products are in high demand by reputed companies
                engaged in the manufacturing of ORS saline bottles energy drinks
                cough syrups multi-vitamins electroplating food products and more
            </p>
            <div className="about-us-content-badges">
                <div><i class="fa-regular fa-circle-check"></i><b>GMP Certified</b></div>
                <div><i class="fa-regular fa-circle-check"></i><b>ISO Compliant</b></div>
                <div><i class="fa-regular fa-circle-check"></i><b>Quality Assured</b></div>
                <div><i class="fa-regular fa-circle-check"></i><b>Global Supply</b></div>
            </div>
        </div>
    )
}