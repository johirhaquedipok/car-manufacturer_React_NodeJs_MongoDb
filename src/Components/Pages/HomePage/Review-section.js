import { useQuery } from "@tanstack/react-query";
import React from "react";
import { authClient } from "../../Utilities/axios-utils";
import Loading from "../../Utilities/Loading";
import HomeReviewCard from "./Home-review-card";

const ReviewSection = () => {
  const { data: reviews, isLoading } = useQuery(["review"], async () => {
    return await authClient.get("/users-review");
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" mx-auto min-h-screen max-w-md md:max-w-full bg-base-200 px-4">
      <div className="hero-content text-center">
        <div className="w-full max-w-md">
          <h2 className="mt-20 mb-2 text-4xl font-extrabold md:text-6xl text-center">
            Customers Review
          </h2>
          <p className="mx-auto mt-5 w-full max-w-lg">
            View our happy customers review
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3  py-4">
        {reviews?.data.map((review) => (
          <HomeReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
