import React from 'react'
import PictureCard from './listItemComponents/PictureCard'
import NameCard from './listItemComponents/NameCard'
import HostCard from './listItemComponents/HostCard'
import LocationCard from './listItemComponents/LocationCard'
import DescriptionCard from './listItemComponents/DescriptionCard'
import AmenityCard from './listItemComponents/AmenityCard'
import PriceCard from './listItemComponents/PriceCard'
import ReviewCard from './listItemComponents/ReviewCard'
import DetailBtn from './listItemComponents/DetailBtn'
import FavBtn from './listItemComponents/FavBtn'
import EditBtn from './listItemComponents/EditBtn'

const ListItem = ({ apartments, setApartments }) => {
console.log(apartments)
    return (
      <section className='flat-container'>
        {apartments.map((currentApartment) => (
            <div key={currentApartment.id}>
                <h1>Hello</h1>
            {/* <div>
                        <PictureCard currentApartment={currentApartment} />
                    </div>
                    <div>
                        <div>
                            <NameCard currentApartment={currentApartment} />
                            <HostCard currentApartment={currentApartment} />
                            <LocationCard currentApartment={currentApartment} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <DescriptionCard currentApartment={currentApartment} />
                            <AmenityCard currentApartment={currentApartment} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <PriceCard currentApartment={currentApartment} />
                            <ReviewCard currentApartment={currentApartment} />
                        </div>
                        <div>
                            <DetailBtn currentApartment={currentApartment} />
                            <FavBtn currentApartment={currentApartment} />
                            <EditBtn currentApartment={currentApartment} />
                        </div>
                    </div>*/}
          </div>
        ))}
      </section>
    );
};

export default ListItem