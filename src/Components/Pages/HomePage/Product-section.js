import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loading from "../../Utilities/Loading";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(["primarydata"], async () => {
    return await axios.get("http://localhost:5000/products");
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-3 ">
      {products?.data?.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
      <ProductCard />
    </div>
  );
};

export default ProductSection;
