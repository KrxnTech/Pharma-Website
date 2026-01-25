import ProductList from "./ProductList"
import PSHeadingDesc from "./PSHeadingDesc"
import FilterProduct from "./ProductFilter"
import "./MainProductBody.css"
import { useState } from "react"

export default function MainProductBody() {
    const [search, setSearch] = useState("")
    return (
        <div>
            <PSHeadingDesc />
            <div className="Main_2_Div">
                <div>
                    <FilterProduct
                        value={search}
                        onChange={setSearch}
                    />
                </div>
                <div>
                    <ProductList search={search} />
                </div>
            </div>
        </div>
    )
}