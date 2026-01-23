import AboutUsMainHeading from "./About-usMainHeading"
import AboutMainHistory from "./About-usMain-History"
import AboutusMainMVV from "./About-usMain-MVV"
import CA from "./About-usMain-AC"
import "./About-usMain.css"

export default function AboutUsMain() {
    return (
        <div id="about-us-main">
            <AboutUsMainHeading />
            <AboutMainHistory />
            <AboutusMainMVV />
            <CA />
        </div>
    )
}