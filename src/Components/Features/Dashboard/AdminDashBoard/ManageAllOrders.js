import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import ConfirmModalDelete from "../../Ui/ConfirmModalDelete";
import AllOrderedTable from "./All-ordered-table";
const ManageAllOrders = () => {
  const [modal, setModal] = useState("");
  // get all ordered products data
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(["userOredresProducts"], async () => {
    return await authClient.get(`/all-users-ordered-products`);
  });

  const { mutate, isLoading: postLoading } = useMutation(
    async (id) => {
      return await authClient.delete(`/users-ordered-products/${id}`);
    },
    {
      onSuccess: (data) => {
        if (data?.data?.acknowledged === true) refetch();
        toast.success("Product Delete Success");
      },
      onError: () => {
        toast.error("there was an error");
      },
    }
  );
  const handleDeleteProduct = (id) => {
    mutate(id);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {products?.data.length !== 0 ? (
        <div>
          <p className="text-center text-4xl pb-5">Manage all orders</p>
          <AllOrderedTable products={products?.data} setModal={setModal} />
          <ConfirmModalDelete
            modal={modal}
            handleDeleteProduct={handleDeleteProduct}
          />
        </div>
      ) : (
        <div className=" text-center text-lg font-extrabold sm:text-2xl lg:text-3xl lg:py-2">
          No Product Ordered yet
        </div>
      )}
    </div>
  );
};

export default ManageAllOrders;
