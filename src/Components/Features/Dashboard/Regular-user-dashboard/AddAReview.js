import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import ReviewCard from "./Review-card";

const AddAReview = () => {
  const [rating, setRating] = useState(5);
  const [user] = useAuthState(auth);

  const {
    data: userProfile,
    isLoading,
    refetch,
  } = useQuery(["reviewuser"], async () => {
    return await authClient.get(`/users-profile/${user?.email}`);
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <p className="text-center text-4xl">Add A Review</p>
      <ReviewCard
        rating={rating}
        setRating={setRating}
        refetch={refetch}
        userProfile={userProfile}
      />

      {/* starts */}
    </div>
  );
};

export default AddAReview;
