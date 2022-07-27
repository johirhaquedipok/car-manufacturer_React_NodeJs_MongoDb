import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { authClient, client } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import ConfirmModalDelete from "../../Ui/ConfirmModalDelete";
import ManageProductsTable from "./Manage-products-table";

const ManageProducts = () => {
  const [modal, setModal] = useState("");
  // get data from parms id
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(["primarydata"], async () => {
    return await client.get("/products");
  });

  // post data to the server
  const { mutate, isLoading: postLoading } = useMutation(
    async (id) => {
      return await authClient.delete(`/delete-products-collection/${id}`);
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

  if (isLoading || postLoading) {
    return <Loading />;
  }

  return (
    <div>
      <ManageProductsTable products={products?.data} setModal={setModal} />
      <ConfirmModalDelete
        handleDeleteProduct={handleDeleteProduct}
        modal={modal}
      />
    </div>
  );
};

export default ManageProducts;
