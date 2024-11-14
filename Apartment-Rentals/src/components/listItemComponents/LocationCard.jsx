import React from "react";

const LocationCard = ({ currentApartment }) => {
  return (
    <div className="location-card">
      <h4>
        {currentApartment.neighbourhood},{" "}
        <span className="neighbourhood-light">
          {currentApartment.neighbourhood_cleansed}
        </span>
      </h4>
      <p>
        {currentApartment.latitude} , {currentApartment.longitude}
      </p>
    </div>
  );
};

export default LocationCard;
