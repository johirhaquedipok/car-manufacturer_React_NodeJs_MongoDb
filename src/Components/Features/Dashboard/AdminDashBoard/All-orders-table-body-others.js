import React from "react";
import AllOrderedProductsDetails from "./All-orderes-table-details";

const AllOrderesTableBody = ({ product, idx }) => {
  console.log(product?.productDetails);
  return (
    <>
      {/* <tr>
        <th>{idx + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
           
            <div>
              <div className="font-bold">{product?.userEmail}</div>
            </div>
            <div>
              <div className="font-bold">{product?.partsName}</div>
            </div>
          </div>
        </td>
        <td>{product?.orderedQty}</td>
        <td>{product?.orderDate}</td>
        <td></td>
        <th>
          <button className="btn btn-ghost btn-xs">Cancel</button>
        </th>
      </tr> */}
      {product?.productDetails.map((item, indx) => (
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
