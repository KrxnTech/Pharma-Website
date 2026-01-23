import "./About-usMain-MVV.css"
export default function AboutusMainMVV() {
    const style = {
        color: "#0E8F7A"
    }
    return (
        <div className="MVV-div-outer">
            <div>


                <div className="MVV-div">

                    <div className="MVV-div-inner">
                        <div className="div-i-inner"><i class="fa-solid fa-bullseye"></i></div>
                        <h3>Mission</h3>
                        <p>To deliver <b style={style}>high-quality pharmaceutical bulk drugs</b> through GMP-compliant processes </p>
                    </div>

                    <div className="MVV-div-inner">
                        <div className="div-i-inner"><i class="fa-regular fa-eye"></i></div>
                        <h3>Vision</h3>
                        <p>To be a trusted and <b style={style}>leading pharmaceutical manufacturer</b> in India and global markets.</p>
                    </div>

                    <div className="MVV-div-inner">
                        <div className="div-i-inner"><i class="fa-regular fa-heart"></i></div>
                        <h3>Values</h3>
                        <p>Quality compliance innovation efficiency and ethical business conduct.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}