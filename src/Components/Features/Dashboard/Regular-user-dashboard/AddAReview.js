import React, { useState } from "react";
import ReviewCard from "./Review-card";

const AddAReview = () => {
  const [rating, setRating] = useState(5);

  return (
    <div>
      <p className="text-center text-4xl">Add A Review</p>
      <ReviewCard rating={rating} setRating={setRating} />

      {/* starts */}
    </div>
  );
};

export default AddAReview;
