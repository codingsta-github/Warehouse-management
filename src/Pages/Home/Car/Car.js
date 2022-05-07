import React from "react";
import { useNavigate } from "react-router-dom";
import "./Car.css";
const Car = (props) => {
  const { _id, images, name, price } = props.car;
  const navigate = useNavigate();
  const updateCar = () => {
    navigate(`car/${_id}`);
  };
  return (
    <div className="car">
      <h1>{name}</h1>
      <p>starting from &#x20B9; {price}</p>
      <button className="button" onClick={updateCar}>
        update
      </button>
      <img src={images} width="100%" alt="" />
    </div>
  );
};

export default Car;
