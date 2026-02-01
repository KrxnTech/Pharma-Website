import GetInTouch from "./GetInTouch";
import SendUsMsg from "./SendUsMsg";
import "./ContactMainCompo.css"

export default function ContactMainCompo() {
    return (
        <div className="MainCompoDiv">
            <div>
                <GetInTouch />
            </div>
            <div>
                <SendUsMsg />
            </div>
        </div>
    )
}