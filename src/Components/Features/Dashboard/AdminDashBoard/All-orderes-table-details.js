import React from "react";

const AllOrderedProductsDetails = ({ email, indx, item }) => {
  return (
    <tr>
      <th>{indx + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          {/* <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={product?.img} alt={product?.partsName} />
      </div>
    </div> */}
          <div>
            <div className="font-bold">{email}</div>
          </div>
          <div>
            <div className="font-bold">{item?.partsName}</div>
          </div>
        </div>
      </td>
      <td>{item?.orderedQty}</td>
      <td>{item?.orderDate}</td>
      <td></td>
      <th>
        <button className="btn btn-ghost btn-xs">Cancel</button>
      </th>
    </tr>
  );
};

export default AllOrderedProductsDetails;
