import React from "react";
import { Link } from "react-router-dom";

const MyOrdersTableBody = ({ product, idx, setModal }) => {
  const price = true;
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
        {/* {!price && (
          <>
            <label
              htmlFor="my-modal-7"
              className="btn btn-ghost btn-xs"
              onClick={() => setModal(product._id)}
            >
              Cancel
            </label>
          </>
        )} */}
        (
        <Link
          to={`/dashboard/payment/${product._id}`}
          className="btn btn-xs btn-success"
        >
          Pay
        </Link>
        )
      </th>
    </tr>
  );
};

export default MyOrdersTableBody;
