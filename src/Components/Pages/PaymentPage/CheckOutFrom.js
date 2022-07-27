import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { authClient } from "../../Utilities/axios-utils";
// import { toast } from "react-toastify";
import Error from "../../Utilities/Error";

const CheckOutFrom = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [cardSuccess, setCardSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    const orderedQty = product?.orderedQty;
    // Create PaymentIntent as soon as the page loads
    authClient.post(`/create-payment-intent`, { orderedQty }).then((data) => {
      if (data?.data?.clientSecret) {
        setClientSecret(data?.data?.clientSecret);
      }
    });
  }, [product]);

  // handle form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    setCardError(error?.message || "");
    setCardSuccess("");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: "email@email.com",
          },
        },
      });

    console.log(paymentIntent);

    if (intentError) {
      setCardError(intentError);
    } else {
      setCardError("");
      setCardSuccess("Payment Completed");
      setTransactionId(paymentIntent.id);
    }
    // update to the product server
    const payment = {
      transactionId: paymentIntent.id,
      product: product?._id,
    };
    // database atch
    authClient
      .patch(`/users-ordered-products/${product?._id}`, { payment })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="my-4 bg-secondary">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <Error>cardError</Error>}
      {cardSuccess && <p>{cardSuccess}</p>}
      2223 0031 2200 3222
    </div>
  );
};

export default CheckOutFrom;
