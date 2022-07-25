import React from "react";
import AllOrderedProductsDetails from "./All-orderes-table-body-details";

const AllOrderesTableBody = ({ product }) => {
  return (
    <>
      {product?.productDetails?.map((item, indx) => (
        <AllOrderedProductsDetails
          email={product.userEmail}
          key={indx}
          item={item}
          indx={indx}
        />
      ))}
    </>
  );
};

export default AllOrderesTableBody;
