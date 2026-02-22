import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h2 className="footer-logo">Gulkas Pharma Pvt Ltd</h2>
                    <p>
                        Plot No.914 Phase-1 GIDC Chhatral - 382729 Ta : Kalol Dist GandhiNagar
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Products</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email : Gulkas440@gmail.com marketing.gulkaspharma@gmail.com</p>
                    <p>Phone: +91 90163 73731</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Gulkas Pharma Pvt Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;