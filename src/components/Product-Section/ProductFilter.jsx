// import "./ProductFilter.css" // import css 
// export default function FilterProduct({ value, onChange }) {

//     // 
//     let ShowValue = (e) => {
//         onChange(e.target.value)
//     }

//     // 
//     let ClearFilter = () => {
//         onChange("")
//     }


//     return (
//         <div className="Filter_Div">
//             <h5>
//                 <i class="fa-solid fa-flask"></i> Filter Products
//             </h5>
//             <div className="Filter_Inputs">
//                 <input
//                     onChange={ShowValue}
//                     value={value}
//                     type="text"
//                     placeholder="Search by Name or CAS number" />

//                 <button onClick={ClearFilter}>Clear</button>
//             </div>
//         </div>
//     )
// }

import "./ProductFilter.css";

export default function FilterProduct({ value, onChange }) {

    const ShowValue = (e) => {
        onChange(e.target.value);
    };

    const ClearFilter = () => {
        onChange("");
    };

    return (
        <div className="filter-wrapper">
            <h5 className="filter-title">
                <i className="fa-solid fa-flask"></i>
                Filter Products
            </h5>

            <div className="filter-controls">
                <input
                    type="text"
                    placeholder="Search by Name or CAS number"
                    value={value}
                    onChange={ShowValue}
                />

                <button onClick={ClearFilter}>
                    Clear Filter
                </button>
            </div>
        </div>
    );
}
