import React from "react";
import AllOrderesTableBody from "./All-orders-table-body-others";

const AllOrderedTable = ({ products }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Product No</th>
            <th>User Email</th>
            <th>Parts Name</th>
            <th>Orderd Qty</th>
            <th>Orderd Date</th>
            <th>Cancel Order</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row  --> */}
          {products?.map((product, idx) => (
            <AllOrderesTableBody
              key={product._id}
              emial={product.userEmail}
              product={product}
              idx={idx}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrderedTable;
