import React from "react";
import PictureCard from "./listItemComponents/PictureCard";
import DetailPage from "./pages/DetailPage";
import DetailBtn from "./listItemComponents/DetailBtn";
import FavBtn from "./listItemComponents/FavBtn";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ListItem = ({ currentApartment, addToFav, handleDelete }) => {
  // console.log("##", currentApartment);

  return (
    <section className="list-item">
      <div className="picture-container">
        <div className="price-tag">
          <h4>
            {currentApartment.price == null
              ? "$??"
              : `${currentApartment.price}`}
          </h4>
          <h5>
            {currentApartment.review_scores_rating == null
              ? "No Reviews"
              : `${currentApartment.review_scores_rating}/5`}
          </h5>
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
        {currentApartment.review_scores_rating > 4.9 && (
          <label className="availability">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </label>
        )}
        <PictureCard currentApartment={currentApartment} />
      </div>
      <div className="info-container">
        <h3>{currentApartment.name}</h3>
        <h4>
          {/* {currentApartment.neighbourhood},{" "}
          <span className="neighbourhood-light"> */}
          {currentApartment.neighbourhood_cleansed}
          {/* </span> */}
        </h4>
        <div className="amenities-tag">
          <label>
            <i class="fa-solid fa-users"></i>
            {currentApartment.accommodates == null
              ? "?"
              : `${currentApartment.accommodates}`}
          </label>
          <label>
            <i class="fa-solid fa-bed"></i>
            {currentApartment.beds == null ? "?" : `${currentApartment.beds}`}
          </label>
          <label>
            <i class="fa-solid fa-bath"></i>
            {currentApartment.bathrooms == null
              ? "?"
              : `${currentApartment.bathrooms}`}
          </label>
        </div>
      </div>
      <div className="btn-container">
        {/* <button
          className='btn-red'
          onClick={() => handleDelete(currentApartment.id)}
        >
          Delete this flat
        </button> */}
        <Link to={`/detail-page/${currentApartment.id}`}>
          <DetailBtn />
        </Link>
      </div>

      {/* <DetailPage  {Element={apartment}} /> */}
      {/* <div className='btn-container'>
        <Link to={`/detail-page/${currentApartment.id} `}>
        </Link>
      </div> */}
    </section>
  );
};

export default ListItem;
