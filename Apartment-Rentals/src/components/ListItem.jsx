import React from "react";
import PictureCard from "./listItemComponents/PictureCard";

import DetailBtn from "./listItemComponents/DetailBtn";
import FavBtn from "./listItemComponents/FavBtn";

const ListItem = ({ currentApartment, addToFav }) => {
  // console.log("##", currentApartment);

  return (
    <section className='list-item'>
      <div className='picture-container'>
        <div className='price-tag'>
          <h4>{currentApartment.price}</h4>
          <h5>{currentApartment.review_scores_rating}/5</h5>
        </div>
        <div className="fav-btn">
          <button
            className="btn-round"
            title="I like it!"
            onClick={() => addToFav(currentApartment.id)}
          >
            <i class="fa-solid fa-star"></i>
          </button>
        </div>
        <PictureCard currentApartment={currentApartment} />
      </div>
      <div className='info-container'>
        <h3>{currentApartment.name}</h3>
        <h4>
          {/* {currentApartment.neighbourhood},{" "}
          <span className="neighbourhood-light"> */}
          {currentApartment.neighbourhood_cleansed}
          {/* </span> */}
        </h4>
        <div className='amenities-tag'>
          <label>
            <i class='fa-solid fa-users'></i>
            {currentApartment.accommodates}
          </label>
          <label>
            <i class='fa-solid fa-bed'></i>
            {currentApartment.beds}
          </label>
          <label>
            <i class='fa-solid fa-bath'></i>
            {currentApartment.bathrooms}
          </label>
        </div>
      </div>
      <DetailBtn />
    </section>
  );
};

export default ListItem;
