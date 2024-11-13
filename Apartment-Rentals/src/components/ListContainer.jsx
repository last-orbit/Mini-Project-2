import React, { useState } from 'react';
import ListItem from './ListItem';
import ApartmentBase from '../assets/Data.json';

const ListContainer = () => {
  const [apartments, setApartments] = useState(ApartmentBase.results);
console.log(apartments)
  return (
    <>
      <div>
        {apartments.map((apartment) => (
          <div key={apartment.id}>
            {/* <h1>{apartment.name}</h1> */}
            <ListItem currentApartment={apartment} setApartments={setApartments} />
          </div>
        ))}

      </div>
    </>
  );
};

export default ListContainer;
