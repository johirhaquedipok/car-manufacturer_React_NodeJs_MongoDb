import React from "react";

const MyOrdersTableBody = ({ product, idx, setModal }) => {
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={product?.img} alt={product?.partsName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{product?.partsName}</div>
          </div>
        </div>
      </td>
      <td>{product?.orderedQty}</td>
      <td>{product?.orderDate}</td>

      <th>
        <label
          htmlFor="my-modal-7"
          className="btn btn-ghost btn-xs"
          onClick={() => setModal(product._id)}
        >
          Cancel
        </label>
      </th>
    </tr>
  );
};

export default MyOrdersTableBody;
