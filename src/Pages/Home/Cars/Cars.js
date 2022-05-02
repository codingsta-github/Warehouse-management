import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCars from "../../../Hooks/useCars";
import Car from '../Car/Car'
import "./Cars.css";
const Cars = () => {
  const [cars, setCars] = useCars();
 

  return (
    <div className="service-container" id="cars">
      <div className="service-heading">
      <h1>Inventory Items</h1>
      <h4>Update Item</h4>
      </div>
      <div className="cars">
      {
          cars.map(service=><Car service={service} key={service.id} ></Car>)
      }
      </div>

    </div>
  );
};

export default Cars;
