import React from "react";

const HomeReviewCard = ({ review }) => {
  return (
    <div className="card bg-base-100 rounded-box   mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full glass">
      {/* user Image */}
      {/* <div className=" avatar">
        <div className="w-24 mask mask-squircle bg-base-contetnmask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px">
          <img src={user?.photoURL} alt={user?.displayName} />
        </div>
      </div> */}

      <div className="card-body">
        <div className="w-full text-center">
          <div className="text-lg font-extrabold">{review?.userReview}</div>
          <div className="text-base-content/70 my-3 text-sm">
            {review?.email}
          </div>
          <div className="text-base-content/70 my-3 text-sm">
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
