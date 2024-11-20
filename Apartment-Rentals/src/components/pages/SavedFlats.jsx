import React from "react";
import ListItem from "../ListItem";

const SavedFlats = ({ favoriteFlats, addToFav }) => {
  return (
    <div className="main-container">
      <h1>Saved Flats</h1>
      <div className="home-page">
        {favoriteFlats.length === 0 ? <h2 className="saved-flats-text">flats would go here, if you saved any</h2> :     favoriteFlats.map((favoriteFlat) => (
            <div key={favoriteFlat.id}>
              <ListItem currentApartment={favoriteFlat} addToFav={addToFav} />
            </div>
          ))}

      </div>
    </div>
  );
};

export default SavedFlats;
