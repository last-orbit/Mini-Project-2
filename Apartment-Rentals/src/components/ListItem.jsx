import React from "react";
import PictureCard from "./listItemComponents/PictureCard";
import NameCard from "./listItemComponents/NameCard";
import HostCard from "./listItemComponents/HostCard";
import LocationCard from "./listItemComponents/LocationCard";
import DescriptionCard from "./listItemComponents/DescriptionCard";
import AmenityCard from "./listItemComponents/AmenityCard";
import PriceCard from "./listItemComponents/PriceCard";
import ReviewCard from "./listItemComponents/ReviewCard";
import DetailBtn from "./listItemComponents/DetailBtn";
import FavBtn from "./listItemComponents/FavBtn";
import EditBtn from "./listItemComponents/EditBtn";

const ListItem = ({ currentApartment, setApartments }) => {
  console.log("##", currentApartment);
  return (
    <section className="list-item">
      <div className="picture-container">
        <div className="price-tag">
          <h4>{currentApartment.price}</h4>
          <h5>{currentApartment.review_scores_rating}/5</h5>
        </div>
        <PictureCard currentApartment={currentApartment} />
      </div>
      <div className="info-container">
        <h3>{currentApartment.name}</h3>
        <h4>
          {currentApartment.neighbourhood},{" "}
          <span className="neighbourhood-light">
            {currentApartment.neighbourhood_cleansed}
          </span>
        </h4>
        <div className="amenities-tag">
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
      </div>
      <div className="btn-container">
        <DetailBtn currentApartment={currentApartment} />
        <FavBtn currentApartment={currentApartment} />
        <EditBtn currentApartment={currentApartment} />
      </div>
    </section>
  );
};

export default ListItem;
