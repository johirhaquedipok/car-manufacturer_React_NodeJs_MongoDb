import React, { useState } from "react";
import StarRating from "./Star-rating";

const AddAReview = () => {
  const [rating, setRating] = useState(0);
  console.log(rating);
  return (
    <div>
      <p className="text-center text-4xl">Add A Review</p>
      <StarRating rating={rating} setRating={setRating} />
      {/* starts */}
    </div>
  );
};

export default AddAReview;
