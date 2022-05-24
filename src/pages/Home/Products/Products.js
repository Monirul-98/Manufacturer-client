import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import ProductsCard from "./ProductsCard";

const Products = ({ setProduct }) => {
  const { isLoading, data: products } = useQuery("products", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-10 mx-8">
      <h2 className="my-7 text-4xl text-center">Products</h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-7">
        {products.map((product) => (
          <ProductsCard
            key={product._id}
            product={product}
            setProduct={setProduct}
          ></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
