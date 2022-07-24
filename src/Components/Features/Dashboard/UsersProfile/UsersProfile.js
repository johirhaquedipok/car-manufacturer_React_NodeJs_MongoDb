import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";

const UsersProfile = ({ product }) => {
  const [user] = useAuthState(auth);
  // post data to the server
  const { mutate, isLoading } = useMutation(
    async (value) => {
      return await authClient.post(`/users-profile/${user?.email}`, value);
    },
    {
      onSuccess: (data) => {
        if (data?.data?.success === true) toast.success("success");
        toast.success("profile updated");
        console.log(data);
      },
      onError: (data) => {
        console.log(data);
        toast("there was an error");
      },
    }
  );

  // image storage key
  const imgStorageKey = "ef578a4bfff87ef72b159fd0382e8dad";

  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // loading
  if (isLoading) {
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
    const { data: result } = await axios.post(url, formData);

    /*   fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          // send to your database
          fetch(`http://localhost:5000/users-profile/:email`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accesToken")}`,
            },
            body: JSON.stringify(profileData),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to update the user");
              }
            });
        }
      }); */

    const profileData = {
      userEmail: data.email,
      userPhone: data.phone,
      userAddress: data.address,
      userName: data.name,
      userPhoto: result?.data?.url,
    };
    mutate(profileData);
  };

  return (
    <div>
      <p className="text-center text-4xl">Users Profile</p>
      <div className="flex">
        {/* card 3 */}
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="px-7 ">
            <img src={product?.data?.img} alt={product?.data?.partsName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product?.data?.partsName}</h2>
            <p>{product?.data?.description.slice(0, 150)}</p>
            {/* product details */}

            {/* form */}

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              {/* your email */}
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide">
                  Name
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
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
              {/* your email */}
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide">
                  Email
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-error">Email is required</p>
                )}
              </div>

              {/* your phone number*/}
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide">
                  Phone No
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
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
                  className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
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
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
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
  );
};

export default UsersProfile;
