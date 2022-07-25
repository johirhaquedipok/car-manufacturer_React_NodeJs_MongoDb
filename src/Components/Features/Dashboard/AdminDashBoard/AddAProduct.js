import { useMutation } from "@tanstack/react-query";
import axios from "axios";
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
        if (data?.data?.acknowledged === true) toast.success("success");
      },
      onError: () => {
        toast.error("there was an error");
      },
    }
  );

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
    const imgStorageKey = "ef578a4bfff87ef72b159fd0382e8dad";
    //  image to the image db
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);

    // post image to the db
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    const { data: img } = await axios.post(url, formData);

    const product = {
      availableQty: data.availableQty,
      minimumOrderQty: data.minimumOrderQty,
      pricePerUnit: data.pricePerUnit,
      img: img?.data?.url,
      partsName: data.partsName,
      company: data.company,
      description: data.description,
    };
    mutate(product);
    reset();
  };

  return (
    <div>
      <p className="text-center text-4xl">Add A Product</p>
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          {/* product form */}
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* product name */}
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
            {/* company name */}
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

            {/* price per unit*/}
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                Price per Unit
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="number"
                placeholder="Price Per Unit"
                {...register("pricePerUnit", {
                  required: true,
                  min: 1,
                })}
              />
              {errors.pricePerUnit?.type === "required" && (
                <p className="text-error">Price per unit is required</p>
              )}
              {errors.pricePerUnit?.type < "min" && (
                <p className="text-error">
                  Price per unit can not be less than 1
                </p>
              )}
            </div>

            {/* minimum order qty*/}
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                Minimum Order Qty
              </label>
              <input
                className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="number"
                placeholder="Minimum Order Qty"
                {...register("minimumOrderQty", {
                  required: true,
                  min: 1,
                })}
              />
              {errors.minimumOrderQty?.type === "required" && (
                <p className="text-error">minimum Order Qty is required</p>
              )}
              {errors.minimumOrderQty?.type < "min" && (
                <p className="text-error">
                  minimum Order Qty can not be less than 1
                </p>
              )}
            </div>
            {/* availabe qty*/}
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                Available Qty
              </label>
              <input
                className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="number"
                placeholder="Available Qty"
                {...register("availableQty", {
                  required: true,
                  min: 1,
                })}
              />
              {errors.availableQty?.type === "required" && (
                <p className="text-error">Available Qty is required</p>
              )}
              {errors.availableQty?.type < "min" && (
                <p className="text-error">Available Qty is required</p>
              )}
            </div>
            {/* description*/}
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                Product Description
              </label>
              <input
                className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="text"
                placeholder="description"
                {...register("description", {
                  required: true,
                })}
              />
              {errors.description?.type === "required" && (
                <p className="text-error">Available Qty is required</p>
              )}
            </div>

            {/* product image*/}
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">
                Product Image
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="file"
                placeholder="Product Image"
                {...register("img", {
                  required: true,
                })}
              />
              {errors.img?.type === "required" && (
                <p className="text-error">Product image is required</p>
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
