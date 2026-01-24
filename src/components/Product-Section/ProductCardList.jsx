import "./ProductCardList.css";
export default function ProductCardList({ img, categoires, name, ChemicalFormula, CASNo }) {
    return (
        <div className="Product_Card_List">
            <div className="Product_Card">
                <div className="Image_div">
                    <img src={img} alt="" /> {/*Product Image*/}
                </div>
                <div className="Product_Details">
                    <a href="#">{categoires}</a> {/*Product Categories*/}
                    <h3>{name}</h3> {/*Product Name*/}
                    <p>Chemcla Formula : <b>{ChemicalFormula}</b></p> {/*Product Chemical Formula*/}
                    <p>CasNo : <b>{CASNo}</b></p> {/*Product CAS*/}
                    <p>Best Chemical Product for Cancer</p> {/*Product Description*/}
                    <p>Purity : 99.9 %</p> {/*Product Purity*/}
                    <button>View Details</button> {/*Product show more Button*/}
                </div>
            </div>
        </div>
    )
}