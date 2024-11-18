import React from 'react'
import { useParams, Link } from 'react-router-dom';


const DetailPage = ({apartments}) => {
    const { apartmentId } = useParams();
    const foundApartment = apartments.find(
      (oneApartment) => oneApartment.id == apartmentId
    );
    return (
      <div className='detail-page'>
        <h2>{foundApartment.name}</h2>

        {foundApartment ? (
          <>
            <img
              src={foundApartment.picture_url}
              alt='Listing Image'
              className='detail-image '
            />
            <div>
              <h3>Price: {foundApartment.price}/Per Night</h3>
            </div>
            <p>{foundApartment.description}</p>
            <p>{foundApartment.neighborhood_overview}</p>
            <div>
              <h4>Location: {foundApartment.neighbourhood}</h4>
            </div>
            <div>
              <h4>Amenties : </h4>
              <p>{foundApartment.amenities}</p>
            </div>
            <div>
              <h4>Hosted by:</h4>
              <h5>{foundApartment.host_name}</h5>
              <p>{foundApartment.host_about}</p>
            </div>
            <Link to='/' className='detail-bth'>
              Back to Home Page
            </Link>
          </>
        ) : (
          <p>Apartment not found</p>
        )}
      </div>
    );
}

export default DetailPage