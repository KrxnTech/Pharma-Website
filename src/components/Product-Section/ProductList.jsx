import ProductCardList from "./ProductCardList"
import products from "../ViewProduct/products"
export default function ProductList({ search }) {
    const style = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
    }

    const FilterProduct = products.filter(product => {
        const q = search.toLowerCase()
        return (
            product.name.toLowerCase().includes(q) || product.CASNo.includes(q)
        )
    })

    return (
        <div style={style}>
            {

                FilterProduct.map((product, idx) => (
                    <ProductCardList
                        key={idx}
                        img={product.img}
                        name={product.name}
                        ChemicalFormula={product.ChemicalFormula}
                        Appearance={product.Appearance}
                        CASNo={product.CASNo}
                        MolecularWeight={product.MolecularWeight}
                        PurityGrade={product.PurityGrade} />
                ))


            }
        </div >
    )
}