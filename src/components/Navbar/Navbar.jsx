// import "./Navbar.css"
// export default function Navbar() {
//     return (
//         <nav>
//             <div className="Nav-Container">
//                 <div className="Logo-Container">
//                     <div><i class="fa-solid fa-flask"></i></div>
//                     <div className="Logo-Text"><b>Gulkas</b> <b className="Pharma-Text">Pharma</b></div>
//                 </div>
//                 <div className="Nav-Item-Link">
//                     <ul className="Nav-Ul">
//                         <li id="HOME">Home</li>
//                         <li>About</li>
//                         <li>Products</li>
//                         <li>Quality</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//                 <div className="Nav-Right">
//                     <div className="More-Icon">
//                         <i class="fa-solid fa-ellipsis-vertical"></i>
//                     </div>
//                     <div className="Theme-Icon"><i class="fa-regular fa-moon"></i></div>
//                     <div><button>Get Quote</button></div>
//                 </div>
//             </div>
//         </nav>
//     )
// }


import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <div className="Nav-Container">

                {/* LOGO */}
                <div className="Logo-Container">
                    <div><i className="fa-solid fa-flask"></i></div>
                    <div className="Logo-Text">
                        <b>Gulkas</b> <b className="Pharma-Text">Pharma</b>
                    </div>
                </div>

                {/* NAV LINKS */}
                <div className="Nav-Item-Link">
                    <ul className="Nav-Ul">
                        <li id="HOME">Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Quality</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* RIGHT SIDE */}
                <div className="Nav-Right">

                    {/* THREE DOT ICON */}
                    <div className="More-Icon">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>

                    <div className="Theme-Icon">
                        <i className="fa-regular fa-moon"></i>
                    </div>

                    <div>
                        <button>Get Quote</button>
                    </div>

                </div>
            </div>
        </nav>
    );
}
