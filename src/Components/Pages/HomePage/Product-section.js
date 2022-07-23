import { useQuery } from "@tanstack/react-query";
import React from "react";
import { client } from "../../Utilities/axios-utils";

import Loading from "../../Utilities/Loading";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(["primarydata"], async () => {
    return await client.get("/products");
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-3 ">
      {products?.data?.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
  );
};

export default ProductSection;
