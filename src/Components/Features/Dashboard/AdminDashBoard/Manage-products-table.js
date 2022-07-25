import React from "react";
import ManageProductsTableBody from "./Manage-Products-table-body";

const ManageProductsTable = ({ products, handleDeleteProduct }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Product No</th>
            <th>Parts Name</th>
            <th>Price Per Unit Qty</th>
            <th>Delete Product</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row  --> */}
          {products?.map((product, idx) => (
            <ManageProductsTableBody
              key={product._id}
              product={product}
              idx={idx}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProductsTable;
