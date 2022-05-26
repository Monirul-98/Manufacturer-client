import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import ProductsCard from "./ProductsCard";

const Products = ({ setProduct }) => {
  const {
    isLoading,
    data: products,
    refetch,
  } = useQuery("products", () =>
    fetch("https://warm-badlands-34406.herokuapp.com/products").then((res) =>
      res.json()
    )
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
            refetch={refetch}
          ></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
