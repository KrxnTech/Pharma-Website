import "./Hero.css"
import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"
import AboutUs from "../About-us/AboutUs"
import WhyChooseHeading from "../WhyChooseSection/WhyChooseHeading"
import MainPartnerPage from "../PartnerWithUsPage/Main"

export default function Hero() {
    return (
        <>
            <div className="Hero-Section">
                <HeroContent />
                <HeroImage />
            </div>
            <AboutUs />
            <WhyChooseHeading />
            <MainPartnerPage />
        </>
    )
}