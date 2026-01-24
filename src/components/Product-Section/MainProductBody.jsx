import ProductList from "./ProductList"
import PSHeadingDesc from "./PSHeadingDesc"
import FilterProduct from "./ProductFilter"
import "./MainProductBody.css"

export default function MainProductBody() {
    return (
        <div>
            <PSHeadingDesc />
            <div className="Main_2_Div">
                <div>
                    <FilterProduct />
                </div>
                <div>
                    <ProductList />
                </div>
            </div>
        </div>
    )
}