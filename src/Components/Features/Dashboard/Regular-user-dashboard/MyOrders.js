import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import ConfirmModalDelete from "../../Ui/ConfirmModalDelete";
import MyOrdersTable from "./My-orderes-table";

const MyOrders = () => {
  const [modal, setModal] = useState("");
  const [user] = useAuthState(auth);
  // get data from parms id
  const { data: products, isLoading } = useQuery(["myorders"], async () => {
    return await authClient.get(`/users-ordered-products/${user?.email}`);
  });

  if (isLoading) {
    return <Loading />;
  }
  const handleDeleteProduct = (id) => {
    console.log(id);
  };

  return (
    <div>
      <p className="text-center text-4xl">My orders</p>
      <MyOrdersTable products={products?.data} setModal={setModal} />
      <ConfirmModalDelete
        modal={modal}
        handleDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default MyOrders;
