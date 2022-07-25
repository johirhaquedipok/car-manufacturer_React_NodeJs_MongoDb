import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { authClient } from "../../Utilities/axios-utils";
import CheckOutFrom from "./CheckOutFrom";
const stripePromise = loadStripe(
  "pk_test_51LPYHDKMsF5jlr5wpCWb1Vd8cgi4r4EEVQJmE22rATlYM1rp94DtROGCbua3pu3G2Shw5clc5Jqe1oO38twJON2N00LfdoCZEJ"
);

const PaymentPage = () => {
  const params = useParams();
  const { data: product, isLoading } = useQuery(["payment"], async () => {
    return await authClient.get(`/ordered-products-payment/${params.id}`);
  });
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutFrom product={product} />
      </Elements>
    </div>
  );
};

export default PaymentPage;
