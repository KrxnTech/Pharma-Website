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

            img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Sodium_chloride_2.JPG",
            name: "Sodium Chloride",
            ChemicalFormula: "NaCl",
            CASNo: "7647-14-15",
            MolecularWeight: "58.44 g/mol",
            Appearance: "White Crystalline Powder",
            PurityGrade: "IP BP USP"

        },
        {
            img: "https://rahaoil.com/wp-content/uploads/2022/07/1-4.png",
            name: "Potassium Chloride",
            ChemicalFormula: "KCl",
            CASNo: "7447-40-7",
            MolecularWeight: "74.55 g/mol",
            Appearance: "White Crystalline Form",
            PurityGrade: "IP BP USP"
        },
        {
            img: "https://5.imimg.com/data5/YC/HX/TX/SELLER-3581410/magnesium-chloride-hexahydrate-flakes.jpg",
            name: "Magnesium Chloride (Hexahydrate)",
            ChemicalFormula: "MgCL₂",
            CASNo: "7786-30-3",
            MolecularWeight: "95.21 g/mol",
            Appearance: "Colorless Crystals",
            PurityGrade: "IP BP USP"
        },
        {
            img: "https://ases.in/cdn/shop/products/download_5_99fe45b6-9d43-457d-991d-117269ebc0d2.jpg?v=1650609458",
            name: "Calcium Chloride (Dihydrate)",
            ChemicalFormula: "CaCl₂",
            CASNo: "10043-52-4",
            MolecularWeight: "110.98 g/mol",
            Appearance: "Pure White Crystal Form",
            PurityGrade: "IP BP USP"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5Bwu673UyVQcVn51f8b6-xrOuxOXnSdJ1Q&s",
            name: "Calcium Carbonate",
            ChemicalFormula: "CaCO₃",
            CASNo: "471-34-1",
            MolecularWeight: "100.09 g/mol",
            Appearance: "Pure White Crystal Form",
            PurityGrade: "IP BP USP"

        },
        {
            img: "https://www.bakeshake.co.in/image/cache/catalog/products/bakeshake-citric-acid-550x550.jpg",
            name: "Citric Acid",
            ChemicalFormula: "C₆H₈O₇",
            CASNo: "77-92-9",
            MolecularWeight: "192.12 g/mol",
            Appearance: "White Crystalline Powder",
            PurityGrade: "IP BP USP"
        },
        {
            img: "https://www.chemategroup.com/wp-content/uploads/2023/02/Sodium-Bicarbonate-Powder-for-Sale.jpg",
            name: "Sodium Bicarbonate",
            ChemicalFormula: "NaHCO₃",
            CASNo: "144-55-8",
            MolecularWeight: "84.01 g/mol",
            Appearance: "White Crystalline Powder",
            PurityGrade: "IP BP USP"
        },
        {
            img: "https://d3awvtnmmsvyot.cloudfront.net/api/file/QUb5608Q7mXJUM08SjP6/convert?fit=max&w=570&cache=true",
            name: "Sodium Citrate",
            ChemicalFormula: "C₆H₅Na₃O₇",
            CASNo: "6132-04-3",
            MolecularWeight: "249.10 g/mol",
            Appearance: "White Crystalline Powder",
            PurityGrade: "IP BP"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqF2LkB_Aavfb4nuYofGbjU2XhtcR3RmSZlg&s",
            name: "Citric Acid Monohydrate",
            ChemicalFormula: "C₆H₈O₇·H₂O",
            CASNo: "5949-29-1",
            MolecularWeight: "210.14 g/mol",
            Appearance: "White Crystalline Powder",
            PurityGrade: "IP BP USP"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR39hkOCbwZQTTjfFjDXneMXNS_tfZDcm2ag&s",
            name: "Sodium Carbonate",
            ChemicalFormula: "Na₂CO₃",
            CASNo: "144-55-8",
            MolecularWeight: "84.01 g/mol",
            Appearance: "Pure White Crystal Form",
            PurityGrade: "IP BP"
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2022/11/WJ/KB/OO/163548754/crystal-sodium-acetate-anhydrous.jpg",
            name: "Sodium Acetate",
            ChemicalFormula: "C₂H₃NaO₂",
            CASNo: "127-09-3",
            MolecularWeight: "82.03 g/mol or 136.08 g/mol",
            Appearance: "White Crystalline Powder",
            PurityGrade: "IP BP USP"
        },
        {
            img: "https://www.chemkits.eu/156-large_default_2x/maleic-acid-2z-but-2-enedioic-acid-110-16-7.jpg",
            name: "Maleic Acid",
            ChemicalFormula: "C₄H₄O₄",
            CASNo: "110-16-7",
            MolecularWeight: "116.07 g/mol",
            Appearance: "Pure White Crystal Form",
            PurityGrade: "IP BP"
        },
        {
            img: "https://cpimg.tistatic.com/04788647/b/4/EDTA-DISODIUM.jpg",
            name: "Di Sodium Edetate (EDTA) Salt",
            ChemicalFormula: "C₁₀H₁₄N₂Na₂O₈",
            CASNo: "6381-92-6",
            MolecularWeight: "336.21 g/mol",
            Appearance: "White Crystalline Powder",
            PurityGrade: "IP BP USP"
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
                        name={product.name}
                        ChemicalFormula={product.ChemicalFormula}
                        Appearance={product.Appearance}
                        CASNo={product.CASNo}
                        MolecularWeight={product.MolecularWeight}
                        PurityGrade={product.PurityGrade}

                    />
                ))
            }
        </div >
    )
}