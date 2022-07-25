import React from "react";

const ManageProductsTableBody = ({ idx, product, setModal }) => {
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{product?.partsName}</td>
      <td>{product?.pricePerUnit}</td>
      <th>
        <label
          htmlFor="my-modal-6"
          className="btn btn-ghost btn-xs"
          onClick={() => setModal(product._id)}
        >
          Delete
        </label>
      </th>
    </tr>
  );
};

export default ManageProductsTableBody;
