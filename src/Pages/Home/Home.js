import React from "react";
import Banner from "./Banner/Banner";
import Cars from "./Cars/Cars";
import Features from "./Features/Features";
import "./Home.css";
import Recommendation from "./Recommendation/Recommendation";
const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Recommendation></Recommendation>
      <Cars></Cars>
      <Features></Features>
    </div>
  );
};

export default Home;
