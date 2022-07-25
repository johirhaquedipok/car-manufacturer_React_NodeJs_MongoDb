import React from "react";

const ManageProductsTableBody = ({ idx, product, handleDeleteProduct }) => {
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{product?.partsName}</td>
      <td>{product?.pricePerUnit}</td>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => handleDeleteProduct(product._id)}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default ManageProductsTableBody;
