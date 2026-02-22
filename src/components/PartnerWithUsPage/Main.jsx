// import RightPartner from "./Right"
// import LeftPartner from "./Left"
// import TrustatedMain from "../TrustadePage/TrustMain"
// import "./Main.css"
// export default function MainPartnerPage() {
//     return <>
//         <div className="MainDivPartner">
//             <div><LeftPartner /></div>
//             <div><RightPartner /></div>
//         </div>
//         <TrustatedMain />

//     </>
// }

import { motion } from "framer-motion";
import RightPartner from "./Right";
import LeftPartner from "./Left";
import TrustatedMain from "../TrustadePage/TrustMain";
import "./Main.css";

export default function MainPartnerPage() {
    return (
        <>
            <div className="MainDivPartner">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 20
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <LeftPartner />
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 20
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <RightPartner />
                </motion.div>

            </div>

            <TrustatedMain />
        </>
    );
}