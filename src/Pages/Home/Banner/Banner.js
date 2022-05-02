import React from "react";
import "./Banner.css";
import banner from "../../../Assets/Banner/banner.jpeg";
const Banner = () => {
  return (
    <div className="banner">
      <div className="image">
    <img src={banner} alt="" />
      </div>
      <div className="details">
        <h1>keep your body</h1>
        <h1>feet & <span>strong</span></h1>
        <p>with Guru Mann</p>
      </div>
      <div className="details-gym">
        <h1>gym</h1>
      </div>
    </div>
  );
};

export default Banner;
