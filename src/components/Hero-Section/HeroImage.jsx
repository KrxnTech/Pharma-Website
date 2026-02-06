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
                <img src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwer4HRvB5sKRQHW08KrDEazRySlL5ISxvUDI6i8p0MLvs3JtabThBq4zLUp7mogUS-q1Z0M_bCtiTqw4p1LftXIyU2nJ1Vae8uw-pytIBQ2TK8xqSFqhQQl82R-_mlyLZ6vt7sxe=s1360-w1360-h1020-rw" alt="" />
            </motion.div>
        </div>
    )
}