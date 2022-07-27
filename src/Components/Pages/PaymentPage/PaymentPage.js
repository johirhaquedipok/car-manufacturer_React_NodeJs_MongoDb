import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { authClient } from "../../Utilities/axios-utils";
import Loading from "../../Utilities/Loading";
import CheckOutFrom from "./CheckOutFrom";

const PaymentPage = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery(["payment", id], async () => {
    return await authClient.get(`/ordered-products-payment/${id}`);
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <CheckOutFrom product={product?.data} />
    </div>
  );
};

export default PaymentPage;
