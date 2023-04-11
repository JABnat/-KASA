import lodgements from '../data/lodgement'
import Host_Rating from '../styles/Host_Rating'

let hostPicture= lodgements.host.picture
let hostName= lodgements.host.name

export default function Host_Rating() {
    return (
        <div>
            <img {hostPicture}/>
            <p>{hostName}</p>
        </div>
    )
}