import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import MyOrdersTable from "./My-orderes-table";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  // get data from parms id
  const { data: products, isLoading } = useQuery(["myorders"], async () => {
    return await authClient.get(`/users-ordered-products/${user?.email}`);
  });
  useEffect(() => {
    console.log(products);
  }, [products]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <p className="text-center text-4xl">My orders</p>
      <MyOrdersTable products={products.data} />
    </div>
  );
};

export default MyOrders;
