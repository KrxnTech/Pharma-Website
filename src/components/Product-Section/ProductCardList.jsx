import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate() // Help us to Redirect to diff pages
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

                    <button onClick={() => navigate(`/viewProduct/${CASNo}`)} className="product-btn">View Product</button>
                </div>

            </div>
        </div>
    );
}
