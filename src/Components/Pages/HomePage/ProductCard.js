import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="rounded-box grid flex-shrink-0 place-items-center md:place-items-stretch xl:mx-0 bg-base-300 ">
      <figure>
        <img src={product?.img} alt={product?.partsName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold ">{product?.partsName}</h2>
        <h2 className="card-title font-bold ">{product?.company}</h2>
        <p> {product?.description?.slice(0, 150)} </p>
        {/* available quantity*/}
        <div className="flex items-center p-1">
          <span className="label-text w-48 text-md">Available Quantity</span>
          <span className="text-md  badge ">{product?.availableQty}</span>
        </div>
        {/* Price */}
        <div className="flex items-center p-1">
          <span className="label-text w-48 text-md">Price Per Unit</span>
          <span className="text-md  badge">${product?.pricePerUnit}</span>
        </div>
        {/* Order Quantity */}
        <div className="flex items-center p-1">
          <span className="label-text w-48 text-md">
            Minimum Order Quantity
          </span>
          <span className="text-md badge ">{product?.minimumOrderQty}</span>pcs
        </div>
        <div className="card-actions justify-center">
          <Link
            className="btn btn-secondary btn-block space-x-2"
            to={`/purchase/${product?._id}`}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
