import React from "react";
import "./Banner.css";
import banner from "../../../Assets/Banner/banner.jpg";
const Banner = () => {
  return (
    <div className="banner">
      <div className="image">
    <img src={banner} alt="" />
      </div>
      <div className="details">
        <h1>keep your body <br /> feet & <span>strong</span></h1>
        <p>with Guru Mann</p>
      </div>
    </div>
  );
};

export default Banner;
