import Navigator from '../../components/Navigator'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import HostRating from '../../components/HostRating'
import {useParams} from 'react-router-dom';
import lodgements from '../../data/lodgements';
import Tag from '../../components/Tag'
import '../../styles/Lodgement.css'

export default function Lodgements() {
    const urlParam  = useParams()
    const lodgementId = urlParam['*']
    const currentLodgement = lodgements.filter(lodgement => lodgement.id === lodgementId)['0']
    console.log(currentLodgement.host.picture)

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
            <HostRating 
                key={currentLodgement['id']}
                name={currentLodgement['host']['name']}
                picture={currentLodgement['host']['picture']}
            />
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
