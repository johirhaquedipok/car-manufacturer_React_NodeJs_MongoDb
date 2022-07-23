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
    <div>
      <h2 className="text-5xl">Review Section</h2>
      <div className="grid grid-cols-3 ">
        {reviews?.data.map((review) => (
          <HomeReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
