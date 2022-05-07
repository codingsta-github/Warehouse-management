import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="image">
        <img src="banner.jpg" alt="" />
      </div>
      <div className="details">
        <h1>The New Comfort Zone -</h1>
        <h1>Unveiling Soon.</h1>
        <p>The new C-Class.</p>
      </div>
    </div>
  );
};

export default Banner;
