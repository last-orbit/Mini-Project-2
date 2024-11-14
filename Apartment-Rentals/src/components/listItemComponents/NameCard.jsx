import React from "react";

const NameCard = ({ currentApartment }) => {
  return (
    <div className="name-card">
      <h3>{currentApartment.name}</h3>
      <h5>{currentApartment.id}</h5>
      <a href="{currentApartment.picture_url}">See on Airbnb</a>
    </div>
  );
};

export default NameCard;
