import { motion } from "framer-motion";
export default function HeroImage() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 22,
                    mass: 0.9
                }}
                className="Image-Div">
                <img src="/images/Gulkas-Real.webp" alt="" />
            </motion.div>
        </div>
    )
}