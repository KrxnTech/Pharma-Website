import "./Hero.css"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";

export default function HeroContent() {
    const navigate = useNavigate()

    // Making WhatsApp Feature ✨
    const PhoneNumber = "919898527683"
    const Msg = "Hello Sir I hope you are doing well. I recently came across your company's website and was impressed by your expertise in pharmaceutical ingredients and specialty chemical manufacturing. I would like to connect and discuss potential business opportunities. Looking forward to your response."
    const WhatsAppURL = `https://wa.me/${PhoneNumber}?text=${encodeURIComponent(Msg)}`

    return (
        <div>

            <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 22,
                    mass: 0.9
                }}
                className="Content-Div"
            >
                <div id="WhatsAap-Div"><a href={WhatsAppURL} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp" id="WhatsApp-Icon"></i></a></div>
                <div className="Trust-Quality-Badge">
                    <p className="Trust-Quality-Text">
                        <i class="fa-solid fa-shield"></i>Trust Quality Since 1982
                    </p>
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
                    <div>
                        <button onClick={() => navigate("/Products")}>
                            Views Products &#8594;
                        </button>
                    </div>
                    <div>
                        <button id="Contact-Us">Contact Us</button>
                    </div>
                </div>

                <div className="Experience-Div">
                    <div>
                        <i class="fa-solid fa-calendar-day"></i>
                        <p>35+Years Experience</p>
                    </div>
                    <div>
                        <i class="fa-brands fa-product-hunt"></i>
                        <p>13+Chemical Products</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-microscope"></i>
                        <p>99%Purity Standard</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
