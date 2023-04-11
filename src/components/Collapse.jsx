import '../styles/Collapse.css'
import Vector_DOWN_ARROW from '../assets/images/Vector_DOWN_ARROW.svg'
import { useState } from 'react'

export default function Collapse({title, description}) {
    const [collapse, setCollapse] = useState(false);
    function handleClick(){
        if (collapse) {
            setCollapse(false)
        } else {
            setCollapse(true)
        }
    }
    return (
        <div className="collapse">
            <div type="button" className="dropdownTitleBox">
                <div className= "dropdownTitleText">{title}</div>
                <img onClick={()=> handleClick()} src={Vector_DOWN_ARROW} alt="up arrow" />
            </div>
                <div className={(collapse ? "dropdownText collapseActive" : "dropdownText collapseInactive")}>
                <p>{description}</p>
                </div>
        </div>
    )
}