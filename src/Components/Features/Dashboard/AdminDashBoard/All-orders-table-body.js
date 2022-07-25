import React from "react";

const AllOrderesTableBody = ({ product, idx }) => {
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{product.userEmail}</td>
      <td>{product?.partsName}</td>
      <td>{product?.orderedQty}</td>
      <td>{product?.orderDate}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Cancel</button>
      </th>
    </tr>
  );
};

export default AllOrderesTableBody;
