import React from "react";

const MyOrdersTableBody = ({ product, idx }) => {
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
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
        <button className="btn btn-ghost btn-xs">Cancel</button>
      </th>
    </tr>
  );
};

export default MyOrdersTableBody;
