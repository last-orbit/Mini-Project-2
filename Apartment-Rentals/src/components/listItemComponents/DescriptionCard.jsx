import React from "react";

const DescriptionCard = ({ currentApartment }) => {
  return (
    <div className="description-card">
      <h4>Description</h4>
      <p>{currentApartment.description}</p>
      <label className="property-type">
        <i class="fa-solid fa-house"></i>
        {currentApartment.property_type}
      </label>

      {/* <h5>{currentApartment.room_type}</h5> */}
    </div>
  );
};

export default DescriptionCard;
