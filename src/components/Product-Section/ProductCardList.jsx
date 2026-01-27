// import "./ProductCardList.css";
// export default function ProductCardList({
//     img,
//     name,
//     ChemicalFormula,
//     CASNo,
//     MolecularWeight,
//     Appearance,
//     PurityGrade
// }) {
//     return (
//         <div className="Product_Card_List">

//             <div className="Product_Card">

//                 <div className="Image_div">

//                     <img src={img} alt="" />

//                 </div>

//                 <div className="Product_Details">

//                     <h3>{name}</h3>
//                     <p>Appearance : <b>{Appearance}</b></p>
//                     <p>Molecular Weight : <b>{MolecularWeight}</b></p>
//                     <p>Chemical Formula : <b>{ChemicalFormula}</b></p>
//                     <p>Purity Grade : <b>{PurityGrade}</b></p>
//                     <p>CasNo : <b>{CASNo}</b></p>
//                     <p>Purity : <b>99% +</b></p>
//                     <button>View Details</button>

//                 </div>

//             </div>
//         </div>
//     )
// }


import "./ProductCardList.css";

export default function ProductCardList({
    img,
    name,
    ChemicalFormula,
    CASNo,
    MolecularWeight,
    Appearance,
    PurityGrade
}) {
    return (
        <div className="product-card-wrapper">
            <div className="product-card">

                {/* Image Section */}
                <div className="product-image">
                    <img src={img} alt={name} />
                </div>

                {/* Content Section */}
                <div className="product-content">
                    <h3 className="product-title">{name}</h3>

                    <div className="product-info">
                        <p><span>Appearance</span>{Appearance}</p>
                        <p><span>Molecular Weight</span>{MolecularWeight}</p>
                        <p><span>Chemical Formula</span>{ChemicalFormula}</p>
                        <p><span>Purity Grade</span>{PurityGrade}</p>
                        <p><span>CAS No</span>{CASNo}</p>
                        <p><span>Purity</span>99% +</p>
                    </div>

                    <button className="product-btn">View Details</button>
                </div>

            </div>
        </div>
    );
}
