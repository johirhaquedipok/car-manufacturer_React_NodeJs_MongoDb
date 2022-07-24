import React from "react";

const AllOrderesTableBody = ({ product, idx }) => {
  return (
    <>
      <tr>
        <th>{idx + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            {/* <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={product?.img} alt={product?.partsName} />
            </div>
          </div> */}
            <div>
              <div className="font-bold">{product?.userEmail}</div>
            </div>
            <div>
              <div className="font-bold">{product?.partsName}</div>
            </div>
          </div>
        </td>
        <td>{product?.orderedQty}</td>
        <td>{product?.orderDate}</td>
        <td>
          {/* {product.productDetails.map((item, indx) => (
            <AllOrderedProductsDetails key={indx} item={item} />
          ))} */}
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">Cancel</button>
        </th>
      </tr>
    </>
  );
};

export default AllOrderesTableBody;