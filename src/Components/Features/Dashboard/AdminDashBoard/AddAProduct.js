import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";

const AddAProduct = () => {
  // post product data to the server
  const { mutate, isLoading } = useMutation(
    async (value) => {
      return await authClient.post(`/add-products`, value);
    },
    {
      onSuccess: (data) => {
        if (data?.data?.success === true) toast.success("success");
        console.log(data);
      },
      onError: () => {
        toast.error("there was an error");
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

  // loading
  if (isLoading) {
    return <Loading />;
  }

  // sing in with email and password
  const onSubmit = async (data) => {
    const productOrder = {
      availableQty: data.availableQty,
      minimumOrderQty: data.minimumOrderQty,
      price: data.price,
      pricePerUnit: data.pricePerUnit,
      img: data.img,
      partsName: data.partsName,
      company: data.company,
      description: data.description,
    };
    mutate(productOrder);
  };

  return (
    <div>
      <p className="text-center text-4xl">Add A Product</p>
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          {/* user profile form */}
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* your name */}
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                Parts Name
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="text"
                placeholder="Parts Name"
                {...register("partsName", {
                  required: true,
                })}
              />
              {errors.partsName?.type === "required" && (
                <p className="text-error">parts Name is required</p>
              )}
            </div>
            {/* your email */}
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                Company Name
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="text"
                placeholder="Company Name"
                {...register("company", {
                  required: true,
                })}
              />
              {errors.company?.type === "required" && (
                <p className="text-error">
                  Company Name is required is required
                </p>
              )}
            </div>

            {/* your phone number*/}
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                Price per Unit
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="text"
                placeholder="Price Per Unit"
                {...register("phone", {
                  required: true,
                })}
              />
              {errors.pricePerUnit?.type === "required" && (
                <p className="text-error">Price per unit is required</p>
              )}
            </div>

            {/* your address*/}
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                Minimum Order Qty
              </label>
              <input
                className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="number"
                placeholder="Minimum Order Qty"
                min={1}
                {...register("minimumOrderQty", {
                  required: true,
                })}
              />
              {errors.minimumOrderQty?.type === "required" && (
                <p className="text-error">minimum Order Qty is required</p>
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
  );
};

export default AddAProduct;
