import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import UserDetaisl from "./User-details";
const imgStorageKey = "ef578a4bfff87ef72b159fd0382e8dad";
const UsersProfile = ({ product }) => {
  const [user] = useAuthState(auth);

  // load user data from db
  const {
    data: userProfile,
    isLoading,
    refetch,
  } = useQuery(["userprofile"], async () => {
    return await authClient.get(`/users-profile/${user?.email}`);
  });

  // post data to the server
  const { mutate, isLoading: profileupdateLoading } = useMutation(
    async (value) => {
      return await authClient.put(
        `/users-profile/${userProfile?.data?._id}`,
        value
      );
    },
    {
      onSuccess: (data) => {
        if (data?.data?.acknowledged === true) toast.success("profile updated");
        refetch();
        reset();
      },
      onError: () => {
        toast("there was an error user profile");
      },
    }
  );

  // image storage key

  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // loading
  if (isLoading || profileupdateLoading) {
    return <Loading />;
  }

  // sing in with email and password
  const onSubmit = async (data) => {
    //  image to the image db
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);

    // post image to the db

    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    const { data: img } = await axios.post(url, formData);

    const profileData = {
      userPhone: data.phone,
      userAddress: data.address,
      userName: data.name,
      userPhoto: img?.data?.url,
    };
    mutate(profileData);
  };

  return (
    <>
      <UserDetaisl userProfile={userProfile?.data} />
      <div>
        {/* user profile card */}

        {/* user profile form to update */}
        <p className="text-center text-4xl my-5">Update Profile</p>
        <div className="flex">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="px-7 ">
              <img src={product?.data?.img} alt={product?.data?.partsName} />
            </figure>
            <div className="card-body">
              {/* user profile form */}
              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                {/* your name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide">
                    Name
                  </label>
                  <input
                    className=" w-full input input-bordered "
                    type="name"
                    placeholder="Your Name"
                    {...register("name", {
                      required: true,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-error">Name is required</p>
                  )}
                </div>
                {/* your phone number*/}
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide">
                    Phone No
                  </label>
                  <input
                    className=" w-full input input-bordered"
                    type="number"
                    placeholder="Your Phone No"
                    {...register("phone", {
                      required: true,
                    })}
                  />
                  {errors.phone?.type === "required" && (
                    <p className="text-error">Phone No is required</p>
                  )}
                </div>

                {/* your address*/}
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide">
                    Your Address
                  </label>
                  <input
                    className=" w-full input input-bordered"
                    type="text"
                    placeholder="Your Address"
                    {...register("address", {
                      required: true,
                    })}
                  />
                  {errors.address?.type === "required" && (
                    <p className="text-error">Address is required</p>
                  )}
                </div>

                {/* your profile picture*/}
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide">
                    Your Profile Photo
                  </label>
                  <input
                    className=" w-full input input-bordered"
                    type="file"
                    placeholder="Your Photo"
                    {...register("photo", {
                      required: true,
                    })}
                  />
                  {errors.photo?.type === "required" && (
                    <p className="text-error">Photo is required</p>
                  )}
                </div>
                <div className="card-actions  justify-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    Update Your Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersProfile;
