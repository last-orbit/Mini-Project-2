import React from 'react'

const NameCard = ({currentApartment}) => {
  return (
    <div>
      <h3>{currentApartment.name}</h3>
      <h5>{currentApartment.id}</h5>
      <p>{currentApartment.picture_url}</p>
    </div>
  );
}

export default NameCard