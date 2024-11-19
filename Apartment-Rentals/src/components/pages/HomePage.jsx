import React, { useState } from "react";
import ListItem from "../ListItem";

const HomePage = ({ apartments, addToFav, handleDelete }) => {
  // console.log(apartments);

  return (
    <div className="main-container">
      <h1>All Flats</h1>
      <div className="home-page">
        {apartments.map((apartment) => (
          <div key={apartment.id}>
            {/* <h1>{apartment.name}</h1> */}
            <ListItem
              currentApartment={apartment}
              addToFav={addToFav}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
