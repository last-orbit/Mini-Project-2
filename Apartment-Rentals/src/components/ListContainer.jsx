import React, { useState } from 'react';
import ListItem from './ListItem';
import ApartmentBase from '../assets/Data.json';

const ListContainer = () => {
  const [apartments, setApartments] = useState(ApartmentBase);
console.log(apartments)
  return (
    <>
      <div>
        {apartments.map((apartment) => (
          <div key={apartment.id}>
            <h1>{apartment.name}</h1>
          </div>
        ))}

        {/* <ListItem apartments={apartments} setApartments={setApartments} /> */}
      </div>
    </>
  );
};

export default ListContainer;
