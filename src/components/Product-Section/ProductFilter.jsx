import { useState } from "react"
import "./ProductFilter.css"
export default function FilterProduct() {
    let [Input_value, setInputValue] = useState("")

    let ShowValue = (e) => {
        setInputValue(e.target.value)
    }

    let ClearFilter = () => {
        setInputValue("")
    }
    return (
        <div className="Filter_Div">
            <h5><i class="fa-solid fa-flask"></i> Filter Products</h5>
            <input onChange={ShowValue} value={Input_value} type="text" placeholder="Search by name or CAS number" />
            <div className="Filter_Button">
                <div>
                    <button>Filter</button>
                </div>
                <div>
                    <button onClick={ClearFilter}>Clear</button>
                </div>
            </div>
        </div>
    )
}