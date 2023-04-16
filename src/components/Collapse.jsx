import '../styles/Collapse.css'
import Vector_DOWN_ARROW from '../assets/images/Vector_DOWN_ARROW.svg'
import { useState } from 'react'
import '../data/lodgements'

export default function Collapse({title, description, equipments}) {
    console.log(equipments)
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

            {equipments?.map((equipment) => ( 
                <div className={(collapse ? "dropdownText collapseActive" : "dropdownText collapseInactive")}>
                    <p>{equipment}</p>
                </div>
            ))}
                <div className={(collapse ? "dropdownText-desc collapseActive-desc" : "dropdownText-desc collapseInactive-desc")}>
                    <p>{description}</p>
                </div>
        </div>
    )
}