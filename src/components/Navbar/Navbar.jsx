// IMPORT NAVLINKS
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {

    let [show, setShow] = useState(false)

    let Click3Dot = () => {
        setShow(!show)
    }



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
                <div className={`Nav-Item-Link ${show ? "active" : ""}`}>
                    <ul className="Nav-Ul">
                        <li id="HOME"><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/AboutUs">About</NavLink></li>
                        <li>Products</li>
                        <li>Quality</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* RIGHT SIDE */}
                <div className="Nav-Right">

                    {/* THREE DOT ICON */}
                    <div className="More-Icon">
                        <i onClick={Click3Dot} className="fa-solid fa-ellipsis-vertical"></i>
                    </div>

                    <div>
                        <button>Get Quote</button>
                    </div>

                </div>
            </div>
        </nav>
    );
}
