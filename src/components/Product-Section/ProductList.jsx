import ProductCardList from "./ProductCardList"
export default function ProductList({ search }) {
    const style = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
    }

    const products = [
        {

            img: "https://www.shutterstock.com/image-photo/dry-chemical-powder-could-be-600nw-709618075.jpg",
            categoires: "API",
            name: "Sodium Chloride",
            ChemicalFormula: "NaCl",
            CASNo: "7647-14-15",
        },
        {
            img: "https://thumbs.dreamstime.com/b/dry-chemical-powder-could-be-natural-chemical-extract-prod-dry-chemical-powder-could-be-natural-chemical-extract-product-103282859.jpg",
            categoires: "Specialty",
            name: "Potassium Chloride",
            ChemicalFormula: "KCl",
            CASNo: "7447-40-7",
        },
        {
            img: "https://bangchemicals.com/wp-content/uploads/2021/06/bangchemical_products_img11.jpg",
            categoires: "Excipients",
            name: "Magnesium Chloride (Hexahydrate)",
            ChemicalFormula: "MgCL₂",
            CASNo: "7786-30-3",
        },
        {
            img: "https://tiimg.tistatic.com/fp/2/007/750/1-kilogram-4-81-g-ml-density-chemical-grade-selenium-metal-powder-206.jpg",
            categoires: "Intermediates",
            name: "Calcium Chloride (Dihydrate)",
            ChemicalFormula: "CaCl₂",
            CASNo: "10043-52-4",
        },
        {
            img: "https://pam-main-website-media.s3.amazonaws.com/wp-content/uploads/2025/03/14062841/Baking-Soda.jpg",
            categoires: "Fine Chemicals",
            name: "Calcium Carbonate",
            ChemicalFormula: "CaCO₃",
            CASNo: "471-34-1",
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420602151/MO/XA/LC/71561762/research-chemicals-powder-500x500.jpeg",
            categoires: "API",
            name: "Citric Acid",
            ChemicalFormula: "C₆H₈O₇",
            CASNo: "77-92-9",
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420602151/MO/XA/LC/71561762/research-chemicals-powder-500x500.jpeg",
            categoires: "API",
            name: "Sodium Bicarbonate",
            ChemicalFormula: "NaHCO₃",
            CASNo: "144-55-8",
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420602151/MO/XA/LC/71561762/research-chemicals-powder-500x500.jpeg",
            categoires: "API",
            name: "Sodium Citrate",
            ChemicalFormula: "C₆H₅Na₃O₇",
            CASNo: "6132-04-3",
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420602151/MO/XA/LC/71561762/research-chemicals-powder-500x500.jpeg",
            categoires: "API",
            name: "Citric Acid Monohydrate",
            ChemicalFormula: "C₆H₈O₇·H₂O",
            CASNo: "5949-29-1",
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420602151/MO/XA/LC/71561762/research-chemicals-powder-500x500.jpeg",
            categoires: "API",
            name: "Sodium Carbonate",
            ChemicalFormula: "Na₂CO₃",
            CASNo: "144-55-8",
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420602151/MO/XA/LC/71561762/research-chemicals-powder-500x500.jpeg",
            categoires: "API",
            name: "Sodium Acetate Trihydrate",
            ChemicalFormula: "C₂H₃NaO₂",
            CASNo: "127-09-3",
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420602151/MO/XA/LC/71561762/research-chemicals-powder-500x500.jpeg",
            categoires: "API",
            name: "Maleic Acid",
            ChemicalFormula: "C₄H₄O₄",
            CASNo: "110-16-7",
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420602151/MO/XA/LC/71561762/research-chemicals-powder-500x500.jpeg",
            categoires: "API",
            name: "Di Sodium Edetate (EDTA) Salt",
            ChemicalFormula: "C₁₀H₁₄N₂Na₂O₈",
            CASNo: "6381-92-6",
        },
    ]

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
                        categoires={product.categoires}
                        name={product.name}
                        ChemicalFormula={product.ChemicalFormula}
                        CASNo={product.CASNo}
                    />
                ))
            }
        </div >
    )
}