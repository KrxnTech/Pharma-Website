import RightPartner from "./Right"
import LeftPartner from "./Left"
import "./Main.css"
export default function MainPartnerPage() {
    return (
        <div className="MainDivPartner">
            <div><LeftPartner /></div>
            <div><RightPartner /></div>
        </div>
    )
}