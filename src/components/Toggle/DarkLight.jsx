import { useEffect, useState } from "react"
import "./DarkLight.css"
export default function DarkLight() {
    const [Toggle, setToggle] = useState(false)
    let HandleToggle = () => {
        setToggle(prev => !prev)
    }

    useEffect(() => {
        document.body.className = Toggle ? "Dark" : "Light"
    }, [Toggle])

    return (
        <>

            <nav>
                <div>
                    <p onClick={HandleToggle}>
                        {Toggle ? <i class="fa-regular fa-sun Light"></i> : <i class="fa-regular fa-moon Dark"></i>}
                    </p>
                </div>
            </nav >

        </>
    )
}