import React from "react";

const PriceCard = ({ currentApartment }) => {
  return (
    <div className="price-card">
      <h4>{currentApartment.price}</h4>
      <p>{currentApartment.minimum_nights} nights min</p>
    </div>
  );
};

export default PriceCard;
