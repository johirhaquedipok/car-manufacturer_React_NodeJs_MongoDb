import React from "react";

const PurchasePage = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl card-compact  shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        {/* product name */}
        <h2 className="card-title font-extrabold">Shoes!</h2>

        {/* products  Quantity */}
        <div className="flex items-center p-1">
          <span className="label-text w-48 text-md">
            Minimum Order Quantity
          </span>
          <span className="text-md badge ">2000000</span>pcs
        </div>
        {/* order quantity */}
        <div className="flex items-center p-1">
          <span className="label-text w-48 text-md">Quantity</span>
          <div className="flex justify-center w-1/5">
            <div className="btn btn-sm font-bold">+</div>
            <input
              className="mx-2 border text-center w-8"
              type="text"
              value="10"
              min="10"
            />
            <div className="btn btn-sm font-bold ">-</div>
          </div>
        </div>

        {/* Product Price */}
        <div className="flex items-center p-1">
          <span className="label-text w-48 text-md">Total Price</span>
          <span className="text-md badge ">2000000</span>pcs
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-secondary btn-block space-x-2">
            Place My Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
