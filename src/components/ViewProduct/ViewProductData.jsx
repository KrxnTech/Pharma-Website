import { useParams } from "react-router-dom"
import products from "./products"
import { useNavigate } from "react-router-dom"


export default function ViewProductData({ }) {
    const { CASNo } = useParams()
    const navigate = useNavigate()
    const product = products.find(product => product.CASNo === CASNo)
    return (
        <div style={{ margin: "100px" }}>
            <button onClick={() => navigate("/Products")}>Back</button>
            <h1 style={{ paddingTop: "50px" }}>View Product in More Detail !!!</h1>
            <img style={{ width: "200px", height: "200px" }} src={product.img} alt="" />
            <p>Chemical Name : {product.name}</p>
            <p>Chemical Formula : {product.ChemicalFormula}</p>
            <p>Cas Num : {product.CASNo}</p>
            <p>Molecular Weight : {product.MolecularWeight}</p>
            <p>Appearance : {product.Appearance}</p>
            <p>Purity  : {product.PurityGrade}</p>
        </div>
    )
}