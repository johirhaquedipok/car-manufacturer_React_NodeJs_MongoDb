import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import StarRating from "../../Ui/Star-rating";

const ReviewCard = ({ rating, setRating }) => {
  const [user] = useAuthState(auth);
  // post data to the server
  const { mutate, isLoading } = useMutation(
    async (value) => {
      return await authClient.post(`/users-review/${user?.email}`, value);
    },
    {
      onSuccess: (data) => {
        if (data?.data?.success === true) toast.success("success");
        console.log(data);
      },
      onError: () => {
        console.log("there was an error");
      },
    }
  );

  // form
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // sing in with email and password
  const onSubmit = async (data) => {
    const userOpinion = {
      userEmail: user?.email,
      userReview: data.review,
      userRating: rating,
    };
    mutate(userOpinion);
  };

  // loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body ">
          <h2 className="card-title pb-2">
            Write a review about our services!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-2 justify-center">
              <textarea
                className="textarea textarea-bordered h-24 w-full"
                placeholder="write your review"
                {...register("review", {
                  required: true,
                })}
              ></textarea>

              {errors.review?.type === "required" && (
                <p className="text-error">Review description is required</p>
              )}
            </div>

            <div className="pb-2">
              <StarRating rating={rating} setRating={setRating} />
            </div>

            <div className="card-actions justify-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
