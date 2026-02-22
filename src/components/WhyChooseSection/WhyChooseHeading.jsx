// import "./WhyChooseHeading.css"
// import SixBoxChoose from "./WhyChooseSixBox"
// export default function WhyChooseHeading() {
//     return (
//         <div className="HeadingWhyChooseDiv">
//             <h1 className="WhyChooseHeading">Why Choose <b className="BoldName">Gulkas Pharma</b></h1>
//             <p className="WhyChoosePara">Our commitment to excellence sets us apart in pharmaceutical chemical manufacturing</p>
//             <SixBoxChoose />
//         </div>
//     )
// }

import { motion } from "framer-motion";
import "./WhyChooseHeading.css";
import SixBoxChoose from "./WhyChooseSixBox";

export default function WhyChooseHeading() {
    return (
        <motion.div
            className="HeadingWhyChooseDiv"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h1
                className="WhyChooseHeading"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Why Choose <b className="BoldName">Gulkas Pharma</b>
            </motion.h1>

            <motion.p
                className="WhyChoosePara"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Our commitment to excellence sets us apart in pharmaceutical chemical manufacturing
            </motion.p>

            <SixBoxChoose />
        </motion.div>
    );
}