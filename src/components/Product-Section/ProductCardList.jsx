import "./ProductCardList.css";
export default function ProductCardList({
    img,
    categoires,
    name,
    ChemicalFormula,
    CASNo
}) {
    return (
        <div className="Product_Card_List">

            <div className="Product_Card">

                <div className="Image_div">

                    <img src={img} alt="" />

                </div>

                <div className="Product_Details">

                    <a href="#">{categoires}</a>

                    <h3>{name}</h3>

                    <p>Chemcla Formula : <b>{ChemicalFormula}</b></p>

                    <p>CasNo : <b>{CASNo}</b></p>

                    <p>Best Chemical Product for Cancer</p>

                    <p>Purity : 99%</p>

                    <button>View Details</button>

                </div>

            </div>
        </div>
    )
}