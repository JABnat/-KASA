import Navigator from '../../components/Navigator'
import Slideshow from '../../components/Slideshow'
// import lodgements from '../../data/lodgement'
// import Collapse from '../../components/Collapse'

export default function Lodgements() {
    return (
        <div>
            < Navigator />
                <div className='slideshow'>
                {/* {lodgements.map(lodgement => { */}
                        < Slideshow
                            // key={lodgement.id} 
                            // id={lodgement.id} 
                            // title={lodgement.title } 
                            // cover={lodgement.cover}
                            // pictures={lodgement.pictures} 
                            // description={lodgement.description} 
                            // hostName={lodgement.host.name} 
                            // hostPicture={lodgement.host.picture} 
                            // rating={lodgement.rating}  
                            // location={lodgement.location} 
                            // equipments={lodgement.equipments} 
                            // tags={lodgement.tags}
                        />
                </div>
                {/* < Collapse />
                < Collapse /> */}
            </div>
    )
    
};
