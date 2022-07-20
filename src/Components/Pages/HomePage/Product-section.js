import React from "react";

const ProductSection = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold ">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        {/* Price */}
        <div className="flex items-center p-1">
          <span className="label-text w-48 text-md">Price Per Unit</span>
          <span className="text-md  badge">$200</span>
        </div>
        {/* available quantity*/}
        <div className="flex items-center p-1">
          <span className="label-text w-48 text-md">Available Quantity</span>
          <span className="text-md  badge ">$200</span>
        </div>
        {/* Order Quantity */}
        <div className="flex items-center p-1">
          <span className="label-text w-48 text-md">
            Minimum Order Quantity
          </span>
          <span className="text-md badge ">2000000</span>pcs
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-secondary btn-block space-x-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
