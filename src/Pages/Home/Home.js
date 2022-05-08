import React from "react";
import Banner from "./Banner/Banner";
import Cars from "./Cars/Cars";
import Disclaimer from "./Disclaimer/Disclaimer";
import "./Home.css";
import Recommendation from "./Recommendation/Recommendation";
const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Recommendation></Recommendation>
      <Cars></Cars>
      <Disclaimer></Disclaimer>
    </div>
  );
};

export default Home;
