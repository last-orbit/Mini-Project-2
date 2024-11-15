import React from "react";

const HostCard = ({ currentApartment }) => {
  return (
    <div className="host-card">
      <h4>{currentApartment.host_name} </h4>
      <h5>ID - {currentApartment.host_id} </h5>
      <a href="{ currentApartment.host_url }">See host's profile</a>
    </div>
  );
};

export default HostCard;
