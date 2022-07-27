import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import { authClient } from "../../../Utilities/axios-utils";
import Loading from "../../../Utilities/Loading";
import ConfirmModalDelete from "../../Ui/ConfirmModalDelete";
import MyOrdersTable from "./My-orderes-table";

const MyOrders = () => {
  const [modal, setModal] = useState("");
  const [user] = useAuthState(auth);

  // get data from user ordered products
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(["myorders"], async () => {
    return await authClient.get(`/users-ordered-products/${user?.email}`);
  });

  // delete user products
  const { mutate, isLoading: deleteloading } = useMutation(
    async (id) => {
      return await authClient.delete(`/users-ordered-products/${id}`);
    },
    {
      onSuccess: (data) => {
        if (data?.data?.acknowledged === true)
          toast.success("Order has cancelled successfully");
        refetch();
      },
      onError: (error) => {
        console.log(error);
        // toast.error("there was an error");
      },
    }
  );

  if (isLoading || deleteloading) {
    return <Loading />;
  }
  const handleDeleteProduct = (id) => {
    mutate(id);
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
