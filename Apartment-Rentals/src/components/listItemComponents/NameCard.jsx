import React from "react";

const NameCard = ({ currentApartment }) => {
  return (
    <div className="name-card">
      <h3>{currentApartment.name}</h3>
      <h5>{currentApartment.id}</h5>
<<<<<<< HEAD
      <p>{currentApartment.listing_url}</p>
=======
      <a href="{currentApartment.picture_url}">See on Airbnb</a>
>>>>>>> 699956d2e403eb8cb4fc0aae175f45fb360226e5
    </div>
  );
};

export default NameCard;
