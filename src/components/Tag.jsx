import '../styles/Tag.css'


export default function Tags({tags}) {
    return(
        <div className='tags-container'>
        <div className="tag-container">
            <div>{tags[0]}</div>
        </div>  
        <div className="tag-container">
            <div>{tags[1]}</div>
        </div>
        </div>
    )
}