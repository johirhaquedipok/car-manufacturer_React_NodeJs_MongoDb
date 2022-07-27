import React from "react";

const AllOrderesTableBody = ({ product, idx, setModal }) => {
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{product.userEmail}</td>
      <td>{product?.partsName}</td>
      <td>{product?.orderedQty}</td>
      <td>{product?.orderDate}</td>
      <td>
        {!product?.transactionId ? (
          <label
            htmlFor="my-modal-6"
            className="btn btn-xs btn-error"
            onClick={() => setModal(product._id)}
          >
            Cancel
          </label>
        ) : (
          <div className="badge badge-primary">Paid</div>
        )}
      </td>
    </tr>
  );
};

export default AllOrderesTableBody;
