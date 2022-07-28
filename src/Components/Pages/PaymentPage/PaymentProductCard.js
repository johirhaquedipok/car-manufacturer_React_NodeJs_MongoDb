import React from "react";

const PaymentProductCard = ({ product }) => {
  return (
    <div className="card card-side flex-col items-center md:flex-row bg-base-100 shadow-xl">
      <figure className="px-7 ">
        <img src={product?.img} alt={product?.partsName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.partsName}</h2>
        <div className="flex  items-center p-1">
          <span className="label-text w-48 text-md">OrderedQt</span>$
          <p>{product?.orderedQty}</p>
        </div>
        <div className="flex  items-center p-1">
          <span className="label-text w-48 text-md">To pay</span>$
          {product?.price}
        </div>
      </div>
    </div>
  );
};

export default PaymentProductCard;
