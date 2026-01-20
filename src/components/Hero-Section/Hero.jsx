import "./Hero.css"
import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"

export default function Hero() {
    return (
        <div className="Hero-Section">
            <HeroContent />
            <HeroImage />
        </div>
    )
}