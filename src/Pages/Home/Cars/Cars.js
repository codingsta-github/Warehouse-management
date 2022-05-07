import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCars from "../../../Hooks/useCars";
import Car from '../Car/Car'
import "./Cars.css";
const Cars = () => {
  const [cars, setCars] = useCars();
  return (
    <div className="car-container" id="cars">
      <div className="car-heading">
      <h1>Inventory Items</h1>
      </div>
      
      <div className="cars">
        
      {
          cars.slice(0,6).map(car=><Car car={car} key={car._id} ></Car>)
      }
      </div>
      <Link to={'/manageInventories'}>Manage Inventories</Link>

    </div>
  );
};

export default Cars;
