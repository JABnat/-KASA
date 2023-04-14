import Navigator from '../../components/Navigator'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Host from '../../components/Host'
import StarRating from '../../components/StarRating'
import {useParams} from 'react-router-dom';
import lodgements from '../../data/lodgements';
import Tag from '../../components/Tag'
import '../../styles/Lodgement.css'

export default function Lodgements() {
    const urlParam  = useParams()
    const lodgementId = urlParam['*']
    const currentLodgement = lodgements.filter(lodgement => lodgement.id === lodgementId)['0']

    return (
        <div>
            < Navigator />
            <div className='slideshow'>
            < Slideshow 
                key={currentLodgement['id']}
                pictures={currentLodgement['pictures']}
            />
            </div>
        <div className='container-title-host'>
            <div className='container-title-city'>
                <h1>{currentLodgement['title']}</h1>
                <h2>{currentLodgement['location']}</h2>
            </div>
        <div className="hostRating-container">
            <Host 
                key={currentLodgement['id']}
                name={currentLodgement['host']['name']}
                picture={currentLodgement['host']['picture']}
            />
            <StarRating score={currentLodgement['rating']} />
        </div>
        </div>
        <Tag
        key={currentLodgement['id']}
        tags={currentLodgement['tags']}
        />
            <div className='collapsable-container'>
                < Collapse 
                    title= "Description"
                    description= {currentLodgement['description']}
                        />
                < Collapse 
                    title= "Equipments"
                    description= {currentLodgement['equipments']}
                        /> 
            </div>
        </div>
    )
    
};
