import '../../App'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import lodgements from '../../data/lodgement'

export default function Home() {
    return (
    <div className='main'>
      < Banner />


      {lodgements.map(lodgement => {
        return (  
          <Card 
              key={lodgement.id} 
              id={lodgement.id} 
              title={lodgement.title } 
              cover={lodgement.cover}
          />
        )
      })}

    </div>
    )

  };



