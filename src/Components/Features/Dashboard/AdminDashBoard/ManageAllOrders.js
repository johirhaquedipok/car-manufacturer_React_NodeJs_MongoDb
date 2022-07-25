import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import ConfirmModalDelete from "../../Ui/ConfirmModalDelete";
import AllOrderedTable from "./All-ordered-table";

const ManageAllOrders = () => {
  const [modal, setModal] = useState("");
  // get all ordered products data
  const { data: products, isLoading } = useQuery(
    ["userOredresProducts"],
    async () => {
      return await authClient.get(`/all-users-ordered-products`);
    }
  );
  const handleDeleteProduct = (id) => {
    console.log(id);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <p className="text-center text-4xl">Manage all orders</p>
      <AllOrderedTable products={products?.data} setModal={setModal} />
      <ConfirmModalDelete
        modal={modal}
        handleDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default ManageAllOrders;
