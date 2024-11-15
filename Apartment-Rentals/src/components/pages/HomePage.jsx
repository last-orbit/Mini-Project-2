import React, { useState } from "react";
import ListItem from "../ListItem";

const HomePage = ({ apartments }) => {
  // console.log(apartments);

  return (
    <div className="home-page main-container">
      {apartments.map((apartment) => (
        <div key={apartment.id}>
          {/* <h1>{apartment.name}</h1> */}
          <ListItem currentApartment={apartment} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
