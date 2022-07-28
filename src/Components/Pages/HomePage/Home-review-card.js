import React from "react";

const HomeReviewCard = ({ review }) => {
  return (
    <div className=" rounded-box  grid bg-base-100 flex-shrink-0 place-items-center items-center  px-4 py-8  xl:mx-0 ">
      <div className="avatar">
        <div className="mask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px">
          <img src={review?.userPhoto} width="94" height="94" alt="profile" />
        </div>
      </div>
      <div>
        <div className="dropdown w-full">
          <div className="text-center">
            <div className="text-lg font-extrabold">{review?.userName}</div>{" "}
            <div className="text-base-content/70 my-3 text-sm">
              {review?.userReview.slice(0, 100)}
            </div>
          </div>{" "}
        </div>{" "}
        <div className=" w-full mb-3">
          <div className="mt-2 text-center">
            {[...Array(review?.userRating)].map((star, idx) => {
              const ratingValue = idx + 1;
              return (
                <input
                  key={idx}
                  type="radio"
                  name="rating-1"
                  value={ratingValue}
                  className={`mask mask-star`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReviewCard;
