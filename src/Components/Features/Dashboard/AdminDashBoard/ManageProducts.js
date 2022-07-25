import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import { authClient, client } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import ManageProductsTable from "./Manage-products-table";

const ManageProducts = () => {
  // get data from parms id
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(["primarydata"], async () => {
    return await client.get("/products");
  });

  // post data to the server
  const { mutate, isLoading1 } = useMutation(
    async (id) => {
      return await authClient.delete(`/delete-products-collection/${id}`);
    },
    {
      onSuccess: (data) => {
        if (data?.data?.acknowledged === true) console.log(data);
      },
      onError: () => {
        toast.error("there was an error");
      },
    }
  );
  const handleDeleteProduct = (id) => {
    mutate(id);
    refetch();
  };

  if (isLoading || isLoading1) {
    return <Loading />;
  }

  return (
    <div>
      <ManageProductsTable
        products={products?.data}
        handleDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default ManageProducts;
