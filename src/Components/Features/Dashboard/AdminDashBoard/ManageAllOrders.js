import { useQuery } from "@tanstack/react-query";
import React from "react";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import AllOrderedTable from "./All-ordered-table";

const ManageAllOrders = () => {
  // get all ordered products data
  const { data: products, isLoading } = useQuery(
    ["userOredresProducts"],
    async () => {
      return await authClient.get(`/all-users-ordered-products`);
    }
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <p className="text-center text-4xl">Manage all orders</p>
      <AllOrderedTable products={products?.data} />
    </div>
  );
};

export default ManageAllOrders;
