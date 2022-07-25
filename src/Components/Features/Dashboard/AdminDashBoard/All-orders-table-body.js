import React from "react";

const AllOrderesTableBody = ({ product, idx, setModal }) => {
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{product.userEmail}</td>
      <td>{product?.partsName}</td>
      <td>{product?.orderedQty}</td>
      <td>{product?.orderDate}</td>
      <th>
        <label
          htmlFor="my-modal-6"
          className="btn btn-ghost btn-xs"
          onClick={() => setModal(product._id)}
        >
          Cancel
        </label>
      </th>
    </tr>
  );
};

export default AllOrderesTableBody;
