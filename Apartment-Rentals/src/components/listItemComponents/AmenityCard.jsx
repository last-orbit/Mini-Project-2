import React from "react";

const AmenityCard = ({ currentApartment }) => {
  const amenitiesList = currentApartment.amenities.join(", ");

  return (
    <div className="amenity-card">
      <div>
        <label>
          <i class="fa-solid fa-users"></i>
          {currentApartment.accommodates}
        </label>
        <label>
          <i class="fa-solid fa-bed"></i>
          {currentApartment.beds}
        </label>
        <label>
          <i class="fa-solid fa-bath"></i>
          {currentApartment.bathrooms}
        </label>
      </div>
      <h4>Amenities</h4>
      <p>{amenitiesList}</p>
    </div>
  );
};

export default AmenityCard;
