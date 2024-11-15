import React from "react";

const ReviewCard = ({ currentApartment }) => {
  return (
    <div className="review-card">
      <h4>{currentApartment.review_scores_rating} / 5</h4>
    </div>
  );
};

export default ReviewCard;
