import React from "react";
import { useParams, Link } from "react-router-dom";

const DetailPage = ({ apartments, handleDelete }) => {
  const { apartmentId } = useParams();
  const foundApartment = apartments.find(
    (oneApartment) => oneApartment.id == apartmentId
  );

  return (
    <div className="detail-page">
      <h2>{foundApartment.name}</h2>

      {foundApartment ? (
        <>
          <div className="detail-content">
            <div className="col-1">
              <img
                src={foundApartment.picture_url}
                alt="Listing Image"
                className="detail-image "
              />

              <Link to={`/update/${foundApartment.id}`}>
                <button
                  className="btn-red"
                  style={{ backgroundColor: "#384b70" }}
                >
                  <i class="fa-solid fa-pen-to-square"></i>Edit this flat
                </button>
              </Link>
              <button
                className="btn-red"
                onClick={() => handleDelete(foundApartment.id)}
              >
                <i class="fa-solid fa-skull-crossbones"></i>Delete this flat
              </button>
            </div>
            <div className="col-2">
              <h4>Details:</h4>
              <p>{foundApartment.description}</p>
              <h4>Neighborhood Overview:</h4>
              <p>{foundApartment.neighborhood_overview}</p>
              <div>
                <h4>City: {foundApartment.neighbourhood}</h4>
                <h5>Neighborhood: {foundApartment.neighbourhood_cleansed}</h5>
              </div>
              <h4>Listing Type:</h4>
              <p>{foundApartment.property_type}</p>
              <h4>Room Details:</h4>
              <div className="room-details">
                <p>
                  Accommodates:{" "}
                  <span>
                    {foundApartment.accommodates == null
                      ? "?"
                      : `${foundApartment.accommodates}`}
                  </span>
                </p>
                <p>
                  Bedrooms:{" "}
                  <span>
                    {foundApartment.bedrooms == null
                      ? "?"
                      : `${foundApartment.bedrooms}`}
                  </span>
                </p>
                <p>
                  Beds:{" "}
                  <span>
                    {foundApartment.beds == null
                      ? "?"
                      : `${foundApartment.beds}`}
                  </span>
                </p>
                <p>
                  Bathrooms:{" "}
                  <span>
                    {foundApartment.bathrooms == null
                      ? "?"
                      : `${foundApartment.bathrooms}`}
                  </span>
                </p>
              </div>
            </div>

            <div className="col-3">
              <h4>
                Price:{" "}
                <span>
                  {" "}
                  {foundApartment.price == null
                    ? "$??"
                    : `${foundApartment.price}`}
                </span>
                /Per Night
              </h4>

              <h4 id="score">
                Review Score:{" "}
                <span>
                  {foundApartment.review_scores_rating == null
                    ? "NA"
                    : `${foundApartment.review_scores_rating}/5`}
                </span>
              </h4>
              <h4>
                Min Night: <span>{foundApartment.minimum_nights}</span>
              </h4>
              <h4>Hosted by:</h4>
              <h5>{foundApartment.host_name}</h5>

              <Link to="/" className="detail-bth">
                Back to Home
              </Link>
            </div>
          </div>
        </>
      ) : (
        <p>Apartment not found</p>
      )}
    </div>
  );
};

export default DetailPage;
