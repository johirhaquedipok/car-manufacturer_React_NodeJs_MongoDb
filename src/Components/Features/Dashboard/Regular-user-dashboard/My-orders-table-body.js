import React from "react";
import { Link } from "react-router-dom";

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
      <td>
        {product?.transactionId ? (
          <div className="badge badge-secondary">paid</div>
        ) : (
          <Link to={`/dashboard/payment/${product._id}`}>
            <div className="badge badge-primary">Pay</div>
          </Link>
        )}
      </td>
      <th>
        {!product?.transactionId && (
          <>
            <label
              htmlFor="my-modal-6"
              className="btn btn-error btn-xs"
              onClick={() => setModal(product._id)}
            >
              Cancel
            </label>
          </>
        )}
      </th>
    </tr>
  );
};

export default MyOrdersTableBody;
