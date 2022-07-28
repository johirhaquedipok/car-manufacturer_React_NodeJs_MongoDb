import { useMutation, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { authClient, client } from "../../Utilities/axios-utils";
import Error from "../../Utilities/Error";
import Loading from "../../Utilities/Loading";

const PurchasePage = () => {
  const [error, setError] = useState("");
  const params = useParams();
  const date = format(new Date(), "PP");
  // get data from parms id
  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery(["singleData"], async () => {
    return await client.get(`/products/${params.id}`);
  });

  // post data to the server
  const { mutate, isLoading: loadingPurchase } = useMutation(
    async (value) => {
      return await authClient.post(`/users-ordered-products`, value);
    },
    {
      onSuccess: (data) => {
        if (data?.data?.result.acknowledged === true) toast.success("success");
        refetch();
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
  } = useForm();
  // watch quantity field after fetching data
  const orderedQty = watch("orderedQty");

  // update quantity field after fetching data
  useEffect(() => {
    setValue("orderedQty", product?.data?.minimumOrderQty);
  }, [setValue, product]);

  // loading
  if (isLoading || loadingPurchase) {
    return <Loading />;
  }

  // sing in with email and password
  const onSubmit = async (data) => {
    const productOrder = {
      productId: product?.data?._id,
      orderedQty: data?.orderedQty,
      partsName: product?.data?.partsName,
      orderDate: date,
      img: product?.data?.img,
      userEmail: data.email,
      userPhone: data.phone,
      userAddress: data.address,
      availableQty: product?.data?.availableQty - parseInt(data?.orderedQty),
      price: parseInt(data?.orderedQty) * parseInt(product?.data?.pricePerUnit),
    };
    mutate(productOrder);
  };

  //   add  qty
  const handleAddQty = (e) => {
    if (orderedQty < product?.data?.availableQty) {
      setError("");
      setValue("orderedQty", parseInt(orderedQty) + 1);
    } else {
      setError("orderQty cannot be more than available qty");
    }
  };

  //   delet qty
  const handleDeleteQty = (e) => {
    if (orderedQty > product?.data?.minimumOrderQty) {
      setError("");
      setValue("orderedQty", parseInt(orderedQty - 1));
    } else {
      setError("orderQty cannot be less than available qty");
    }
  };

  return (
    <div className="flex">
      {/* card 3 */}
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="px-7 ">
          <img src={product?.data?.img} alt={product?.data?.partsName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.data?.partsName}</h2>
          <p>{product?.data?.description.slice(0, 150)}</p>
          <div className="flex items-center p-1">
            <span className="label-text w-48 text-md">Available Qty</span>
            <span className="text-md  badge">
              {product?.data?.availableQty}
            </span>
          </div>
          {/* product details */}

          {/* form */}

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* order quantity */}
            <div className="flex items-center p-1">
              <span className="label-text w-48 text-md">Minmum Quantity</span>
              <div className="flex justify-center w-1/5">
                <div className="btn btn-sm font-bold" onClick={handleAddQty}>
                  +
                </div>
                <input
                  className="mx-2 border text-center w-12"
                  type="number"
                  {...register("orderedQty", {
                    required: true,
                  })}
                />
                <div className="btn btn-sm font-bold" onClick={handleDeleteQty}>
                  -
                </div>
              </div>
            </div>
            <div>
              {(orderedQty < product?.data?.minimumOrderQty ||
                orderedQty > product?.data?.availableQty ||
                error) && (
                <Error>
                  {error
                    ? error
                    : "Order Quanty cannot be less than minimumOrderQty"}
                </Error>
              )}
            </div>
            {/* example end */}

            {/* your email */}
            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">Email</label>
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
              <label className="text-sm font-medium   tracking-wide">
                Your Address
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
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

            <div className="card-actions  justify-center">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={
                  orderedQty > product?.data?.availableQty ||
                  orderedQty < product?.data?.minimumOrderQty
                }
              >
                Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
