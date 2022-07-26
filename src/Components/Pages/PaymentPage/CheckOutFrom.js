import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { authClient } from "../../Utilities/axios-utils";
import Error from "../../Utilities/Error";

const CheckOutFrom = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const orderedQty = product?.orderedQty;
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

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "userEmail",
            email: "email.com",
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");

      //store payment on database
      //   const payment = {
      //     appointment: _id,
      //     transactionId: paymentIntent.id
      // }
      // fetch(`https://secret-dusk-46242.herokuapp.com/booking/${_id}`, {
      //     method: 'PATCH',
      //     headers: {
      //         'content-type': 'application/json',
      //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      //     },
      //     body: JSON.stringify(payment)
      // }).then(res=>res.json())
      // .then(data => {
      //     setProcessing(false);
      //     console.log(data);
      // })
    }
  };
  return (
    <div className="my-4 bg-secondary">
      {" "}
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
    </div>
  );
};

export default CheckOutFrom;
