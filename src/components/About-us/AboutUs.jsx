import { motion } from "framer-motion";
import AboutUsContent from "./AboutUsContent";
import "./AboutUs.css";

export default function AboutUs() {
    return (
        <motion.div
            className="about-us"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="about-us-content">
                <AboutUsContent />
            </div>
        </motion.div>
    );
}