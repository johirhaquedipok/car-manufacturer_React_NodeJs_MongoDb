import React from "react";
import MyOrdersTableBody from "./My-orders-table-body";

const MyOrdersTable = ({ products, setModal }) => {
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
            <th>Paid</th>
            <th>Cancel Order</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row  --> */}
          {products?.map((product, idx) => (
            <MyOrdersTableBody
              key={product._id}
              product={product}
              idx={idx}
              setModal={setModal}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrdersTable;
