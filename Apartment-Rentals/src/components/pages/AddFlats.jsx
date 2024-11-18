import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddFlats = ({ handleAddApartment }) => {
  //Defining all the value I want to get in my form
  //Name of the flat = name
  //Neighbourhood = neighbourhood_cleansed
  // Accomodates = accommodates
  // N od Beds = beds
  // N of bathrooms = bathrooms
  // price per night = price
  // Reviews =
  // has availability = has_availability

  const [name, setName] = useState("");
  const [neighbourhood_cleansed, setNeighbourhoodCleansed] = useState("");
  const [picture_url, setPicture] = useState("");
  const [accommodates, setAccommodates] = useState(0);
  const [beds, setBeds] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [price, setPrice] = useState(0);
  const [review_scores_rating, setReviewScoresRating] = useState(0);
  const [has_availability, setHasAvailability] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const flatToAdd = {
      id: uuidv4(),
      name: name,
      neighbourhood_cleansed: neighbourhood_cleansed,
      accommodates: accommodates,
      beds: beds,
      picture_url: picture_url,
      bathrooms: bathrooms,
      price: price,
      review_scores_rating: review_scores_rating,
      has_availability: has_availability,
    };

    handleAddApartment(flatToAdd);

    //reset the states
    setName("");
    setNeighbourhoodCleansed("");
    setAccommodates("");
    setBeds("");
    setPicture("");
    setBathrooms("");
    setPrice("");
    setReviewScoresRating("");
    setHasAvailability("");
  };

  return (
    <div className="home-page main-container">
      <div className="form-container">
        <h1>Add a new appartement</h1>
        <p>
          Please fill the form to add a new appartement. If you want to add more
          details, please go to the flat detail page once created and update
          it...
        </p>
        <form onSubmit={handleSubmit}>
          <label>Flat's name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Lovely house in a fantastic square"
            required
          />
          <label>Location</label>
          <input
            type="text"
            value={neighbourhood_cleansed}
            onChange={(event) => setNeighbourhoodCleansed(event.target.value)}
            placeholder="Embajadores"
          />
          <label>Image</label>
          <input
            type="url"
            value={picture_url}
            onChange={(event) => setPicture(event.target.value)}
            placeholder="Url please !"
          />
          <div className="form-number-container">
            <div>
              <label>Number of guests</label>
              <input
                type="number"
                min={1}
                value={accommodates}
                onChange={(event) => setAccommodates(event.target.value)}
                placeholder="The more fools, the merrier"
              />
            </div>
            <div>
              <label>Number of beds</label>
              <input
                type="number"
                value={beds}
                onChange={(event) => setBeds(event.target.value)}
                placeholder="Please don't make me sleep on the floor!"
                min={1}
              />
            </div>
            <div>
              <label>Number of bathrooms</label>
              <input
                type="number"
                min={1}
                value={bathrooms}
                onChange={(event) => setBathrooms(event.target.value)}
                placeholder="I love to sing naked"
              />
            </div>
          </div>

          <div className="form-price-container">
            <div>
              <label>Price per night</label>
              <input
                type="number"
                min={1}
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <div>
              <label>Reviews</label>
              <input
                type="number"
                min={1}
                value={review_scores_rating}
                onChange={(event) => setReviewScoresRating(event.target.value)}
              />
            </div>
            <span></span>
          </div>
          <div className="form-checkbox-container">
            <label>This flat is available</label>
            <input
              type="checkbox"
              value={has_availability}
              onChange={(event) => setHasAvailability(event.target.value)}
            />
            {/* <span class="checkmark"> </span> */}
          </div>
          <button type="submit">Add this new flat!</button>
        </form>
      </div>
    </div>
  );
};

export default AddFlats;
