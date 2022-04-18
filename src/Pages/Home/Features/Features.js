import React from "react";
import "./Features.css";
import gallery1 from "../../../Assets/gallery/gallery1.jpg";
import gallery2 from "../../../Assets/gallery/gallery2.jpg";
import gallery3 from "../../../Assets/gallery/gallery3.jpg";
import gallery4 from "../../../Assets/gallery/gallery4.jpg";
import gallery5 from "../../../Assets/gallery/gallery5.jpg";
import gallery6 from "../../../Assets/gallery/gallery6.jpg";
const Features = () => {
  return (
    <div className="feature-container" id="services">
      <div className="feature-heading">
        <h1>GALLERY UPDATES</h1>
        <h4>STAY HEALTHY & FIT</h4>
      </div>
      <div className="feature-gallery">
        <div className="gallery-flex">
          <img src={gallery1} alt="" />
          <img src={gallery2} alt="" />
        </div>
        <div className="non-flex">
          <img src={gallery5} alt="" />
        </div>
        <div className="non-flex">
          <img src={gallery6} alt="" />
        </div>
        <div className="gallery-flex">
          <img src={gallery3} alt="" />
          <img src={gallery4} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Features;
