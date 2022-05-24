import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Products from "./Products/Products";

const Home = ({ setProduct }) => {
  return (
    <div>
      <Banner></Banner>
      <Products setProduct={setProduct}></Products>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
