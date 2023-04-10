import '../styles/Collapse.css'
import Vector_DOWN_ARROW from '../assets/images/Vector_DOWN_ARROW.svg'

export default function Collapse({title, description}) {
    return (
        <div className="collapse">
            <button type="button" class="dropdownTitleBox">
                <div className= "dropdownTitleText">{title}</div>
                <img className= "vectorArrow" src={Vector_DOWN_ARROW} alt="up arrow" />
            </button>
                <div class="dropdownText">
                <p>{description}</p>
                </div>
        </div>
    )
}