import React from "react";
import AllOrderesTableBody from "./All-orders-table-body";

const AllOrderedTable = ({ products, setModal, handleShipping }) => {
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
            <th>Status</th>
            <th>Cancel Order</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row  --> */}
          {products?.map((product, idx) => (
            <AllOrderesTableBody
              key={product._id}
              product={product}
              idx={idx}
              setModal={setModal}
              handleShipping={handleShipping}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrderedTable;
