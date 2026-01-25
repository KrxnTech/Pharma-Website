import "./ProductFilter.css"
export default function FilterProduct({ value, onChange }) {

    let ShowValue = (e) => {
        onChange(e.target.value)
    }

    let ClearFilter = () => {
        onChange("")
    }
    return (
        <div className="Filter_Div">
            <h5>
                <i class="fa-solid fa-flask"></i> Filter Products
            </h5>
            <div className="Filter_Inputs">
                <input
                    onChange={ShowValue}
                    value={value}
                    type="text"
                    placeholder="Search by name or CAS number" />

                <button onClick={ClearFilter}>Clear</button>
            </div>
        </div>
    )
}