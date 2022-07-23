import React from "react";

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((star, idx) => {
        const ratingValue = idx + 1;
        return (
          <input
            key={idx}
            type="radio"
            name="rating-1"
            value={ratingValue}
            className={`mask mask-star`}
            onClick={() => setRating(ratingValue)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
