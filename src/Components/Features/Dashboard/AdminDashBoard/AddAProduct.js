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
    </div>
  );
};

export default AddAProduct;
