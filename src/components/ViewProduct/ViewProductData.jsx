import { useParams, useNavigate } from "react-router-dom";
import products from "./products";
import "./ViewProductData.css";

export default function ViewProductData() {
    const { CASNo } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.CASNo === CASNo);

    if (!product) {
        return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Product Not Found</h2>;
    }

    return (
        <div className="ProductPage">

            <div className="ProductHeader">
                <button className="BackBtn" onClick={() => navigate("/Products")}>
                    Back to Page
                </button>
                <h1>
                    Product Name : {product.name}
                </h1>
            </div>

            <div className="ProductCard">

                <div className="ProductImage">
                    <img src={product.img} alt={product.name} />
                </div>

                <div className="ProductDetails">

                    <div className="DetailItem">
                        <span>Chemical Formula</span>
                        <p>{product.ChemicalFormula}</p>
                    </div>

                    <div className="DetailItem">
                        <span>CAS Number</span>
                        <p>{product.CASNo}</p>
                    </div>

                    <div className="DetailItem">
                        <span>Molecular Weight</span>
                        <p>{product.MolecularWeight}</p>
                    </div>

                    <div className="DetailItem">
                        <span>Appearance</span>
                        <p>{product.Appearance}</p>
                    </div>

                    <div className="DetailItem">
                        <span>Purity Grade</span>
                        <p>{product.PurityGrade}</p>
                    </div>

                </div>

            </div>

        </div>
    );
}
