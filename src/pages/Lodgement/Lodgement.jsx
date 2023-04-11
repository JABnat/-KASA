import Navigator from '../../components/Navigator'
import Slideshow from '../../components/Slideshow'
// import lodgements from '../../data/lodgement'
import Collapse from '../../components/Collapse'
// import Host_Rating from '../../components/Host_Rating'
import {useParams} from 'react-router-dom';
import lodgements from '../../data/lodgements';
import '../../styles/Lodgement.css'

export default function Lodgements() {
    const urlParam  = useParams()
    const lodgementId = urlParam['*']
    const currentLodgement = lodgements.filter(lodgement => lodgement.id === lodgementId)['0']
    console.log(currentLodgement.title)

   //console.log(lodgements.filter(lodgement => lodgement.id === lodgementId))

    return (
        <div>
            < Navigator />
            <div className='slideshow'>
             < Slideshow 
                        key={currentLodgement['id']}
                        pictures={currentLodgement['pictures']}
                    />
                </div>
                    <h1>{currentLodgement['title']}</h1>
                    <h2>{currentLodgement['location']}</h2>
                {/*  <Tag />
                <Host_Rating />*/}
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
