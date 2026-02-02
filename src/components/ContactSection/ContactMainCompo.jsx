import GetInTouch from "./GetInTouch";
import SendUsMsg from "./SendUsMsg";
import "./ContactMainCompo.css"
import MapLocation from "./Map";

export default function ContactMainCompo() {
    return (
        <>
            <div className="MainCompoDiv">
                <div>
                    <GetInTouch />
                </div>
                <div>
                    <SendUsMsg />
                </div>
            </div>
            <div>
                <MapLocation />
            </div>
        </>
    )
}