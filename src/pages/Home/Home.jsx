import '../../App'
import '../../styles/Home.css'
import '../../styles/Navigator.css'
import Banner from '../../components/Banner'
import Navigator from '../../components/Navigator'
// import Card from '../../components/Card'
// import lodgements from '../../data/lodgement'
import Footer from "../../components/Footer"

export default function Home() {
    return (
      
    <div className='main'>
      < Navigator />
      < Banner />

      <div className='luther'>
        <div className='van'>
          <div className='dross'></div>
        </div>
      </div>

      {/* {lodgements.map(lodgement => {
        return (  
          <Card 
              key={lodgement.id} 
              id={lodgement.id} 
              title={lodgement.title } 
              cover={lodgement.cover}
          />
        )
      })} */}
      < Footer />
    </div>
    )

  };



