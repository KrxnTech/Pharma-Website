// import "./WhyChooseSixBox.css"
// export default function SixBoxChoose() {
//     return (
//         <div className="SixBoxContainer">
//             <div className="SixSingleBox">
//                 <div className="IconDiv-WhyChoose">
//                     <i className="fa-solid fa-shield Icons-WhyChoose"></i>
//                     <h3 className="QA">Quality Assurance</h3>
//                 </div>
//             </div>
//             <div className="SixSingleBox">
//                 <div className="IconDiv-WhyChoose">
//                     <i className="fa-solid fa-tag Icons-WhyChoose"></i>
//                     <h3 className="RA">Regulatory Compliance</h3>
//                 </div>
//             </div>
//             <div className="SixSingleBox">
//                 <div className="IconDiv-WhyChoose">
//                     <i className="fa-solid fa-microscope Icons-WhyChoose"></i>
//                     <h3 className="PS">Purity Standards</h3>
//                 </div>
//             </div >
//             <div className="SixSingleBox">
//                 <div className="IconDiv-WhyChoose">
//                     <i className="fa-solid fa-people-group Icons-WhyChoose"></i>
//                     <h3 className="IE">Industry Experience</h3>
//                 </div>
//             </div >
//             <div className="SixSingleBox">
//                 <div className="IconDiv-WhyChoose">
//                     <i className="fa-regular fa-circle-check Icons-WhyChoose"></i>
//                     <h3 className="CSS">Consistent Supply</h3>
//                 </div>
//             </div >
//             <div className="SixSingleBox">
//                 <div className="IconDiv-WhyChoose">
//                     <i className="fa-solid fa-flask Icons-WhyChoose"></i>
//                     <h3 className="CS">Custom Synthesis</h3>
//                 </div>
//             </div >
//         </div >
//     )
// }

import { motion } from "framer-motion";
import "./WhyChooseSixBox.css";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const boxVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 18
        }
    }
};

export default function SixBoxChoose() {
    return (
        <motion.div
            className="SixBoxContainer"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {[
                { icon: "fa-shield", title: "Quality Assurance" },
                { icon: "fa-tag", title: "Regulatory Compliance" },
                { icon: "fa-microscope", title: "Purity Standards" },
                { icon: "fa-people-group", title: "Industry Experience" },
                { icon: "fa-circle-check", title: "Consistent Supply", regular: true },
                { icon: "fa-flask", title: "Custom Synthesis" }
            ].map((item, index) => (
                <motion.div
                    key={index}
                    className="SixSingleBox"
                    variants={boxVariants}
                >
                    <div className="IconDiv-WhyChoose">
                        <i
                            className={`${item.regular ? "fa-regular" : "fa-solid"} ${item.icon} Icons-WhyChoose`}
                        ></i>
                        <h3>{item.title}</h3>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}