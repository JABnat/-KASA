import '../styles/Tag.css'
import '../data/lodgements'

export default function Tags({id, tags}) {
    console.log(tags)

    return (
        <div className='yo'>
            {tags.map((tag) => (
                <div className="tags-container -container">
			        <div className="tag-container ">{tag}</div>	
	         	</div>
            ))
            }
        </div>
    )
}
