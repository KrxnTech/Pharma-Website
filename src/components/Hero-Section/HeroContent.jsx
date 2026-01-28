import "./Hero.css"
import { useNavigate } from "react-router-dom"
export default function HeroContent() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="Content-Div">
                <div className="Trust-Quality-Badge">
                    <p className="Trust-Quality-Text"><i class="fa-solid fa-shield"></i>Trust Quality Since Establishment</p>
                </div>
                <div className="Heading-Div">
                    <h1 id="Premium">Premium</h1>
                    <h1 id="Pharmaceuticals">Pharmaceuticals</h1>
                    <h1 id="Chemical-Solutions">Chemical Products</h1>
                </div>
                <div className="Description-Div">
                    <p>
                        Manufacturing and supplying high-purity pharmaceutical <br />
                        ingredients, intermediates, and specialty chemicals for the<br />
                        global healthcare industry
                    </p>
                </div>
                <div className="Button-Div">
                    <div><button onClick={() => navigate("/Products")}>Views Products &#8594;</button></div>
                    <div><button id="Contact-Us">Contact Us</button></div>
                </div>

                <div className="Experience-Div">
                    <div><i class="fa-solid fa-calendar-day"></i><p>35+Years Experience</p></div>
                    <div><i class="fa-brands fa-product-hunt"></i><p>13+Chemical Products</p></div>
                    <div><i class="fa-solid fa-microscope"></i><p>99%Purity Standard</p></div>
                </div>
            </div>
        </div>
    )
}