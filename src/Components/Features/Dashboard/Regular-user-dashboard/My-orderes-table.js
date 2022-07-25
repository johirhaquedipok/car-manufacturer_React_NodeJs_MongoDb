import React from "react";
import MyOrdersTableBody from "./My-orders-table-body";

const MyOrdersTable = ({ products }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Product No</th>
            <th>Product Name</th>
            <th>Orderd Qty</th>
            <th>Orderd Date</th>
            <th>Cancel Order</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row  --> */}
          {products?.productDetails?.map((product, idx) => (
            <MyOrdersTableBody
              key={product.productId + idx}
              product={product}
              idx={idx}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrdersTable;
