import { useParams } from "react-router-dom"
import products from "./products"
import { useNavigate } from "react-router-dom"
import "./ViewProductData.css"


export default function ViewProductData({ }) {
    const { CASNo } = useParams()
    const navigate = useNavigate()
    const product = products.find(product => product.CASNo === CASNo)
    return (
        <>
            <div className="UpperHeading">
                <h1>Detail Info About <b>Products</b></h1>
                <button onClick={() => navigate("/Products")}>Back</button>
            </div>
            <div className="ViewProductDataContainer">
                <div>
                    <img src={product.img} alt="" />
                </div>
                <div className="DetailDiv">
                    <p>Chemical Name : {product.name}</p>
                    <p>Chemical Formula - {product.ChemicalFormula}</p>
                    <p>Cas Num : {product.CASNo}</p>
                    <p>Molecular Weight : {product.MolecularWeight}</p>
                    <p>Appearance - {product.Appearance}</p>
                    <p>Purity  - {product.PurityGrade}</p>
                </div>
            </div>
        </>
    )
}