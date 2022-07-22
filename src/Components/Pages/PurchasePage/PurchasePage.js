import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loading from "../../Utilities/Loading";

const PurchasePage = () => {
  const params = useParams();

  // get data from parms id
  const { data: product, isLoading } = useQuery(["singleData"], async () => {
    return await axios.get(`http://localhost:5000/products/${params.id}`);
  });

  const [qty, setQty] = useState(0);
  useEffect(() => {
    setQty(product?.data?.minimumOrderQty);
  }, [product]);
  // form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // loading
  if (isLoading) {
    return <Loading />;
  }

  // sing in with email and password
  const onSubmit = async (data) => {
    console.log(data);
  };
  console.log(qty);

  //   delet qty
  const handleAddQty = () => {
    if (qty < product?.data?.availableQty) {
      setQty((prev) => parseInt(prev) + 1);
    } else {
      alert("you can not do that");
    }
  };
  //   delet qty
  const handleDeleteQty = () => {
    // () => setQty((prev) => parseInt(prev) - 1)
    if (qty > product?.data?.minimumOrderQty) {
      setQty((prev) => parseInt(prev) - 1);
    } else {
      alert("you can not do that");
    }
  };

  return (
    <div className="flex">
      {/* card 3 */}
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="px-7 ">
          <img src="https://placeimg.com/200/280/arch" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.data?.partsName}</h2>
          <p>{product?.data?.description.slice(0, 150)}</p>
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
                  type="text"
                  value={qty}
                  {...register("orderedQty", {
                    required: true,
                  })}
                />
                <div className="btn btn-sm font-bold" onClick={handleDeleteQty}>
                  -
                </div>
              </div>
            </div>

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
              <label className="text-sm font-medium   tracking-wide">
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
              <button type="submit" className="btn btn-primary btn-block">
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
