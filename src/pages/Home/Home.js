import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Phone from "./Phone/Phone";
import Products from "./Products/Products";
import Sweeper from "./Sweeper/Sweeper";
const Home = ({ setProduct }) => {
  return (
    <div>
      <Banner></Banner>
      <Products setProduct={setProduct}></Products>
      <BusinessSummary></BusinessSummary>
      <Sweeper></Sweeper>
      <Phone></Phone>
    </div>
  );
};

export default Home;
