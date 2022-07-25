import React from "react";

const AllOrderedProductsDetails = ({ email, indx, item }) => {
  return (
    <tr>
      <th>{indx + 1}</th>
      <td>{email}</td>
      <td>{item?.partsName}</td>
      <td>{item?.orderedQty}</td>
      <td>{item?.orderDate}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Cancel</button>
      </th>
    </tr>
  );
};

export default AllOrderedProductsDetails;
