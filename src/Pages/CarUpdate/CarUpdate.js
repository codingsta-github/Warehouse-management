import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CarUpdate.css";
const CarUpdate = () => {
  const { _id } = useParams();

  const [car, setCar] = useState({});
  useEffect(() => {
    fetch(`https://mercedez-warehouse.herokuapp.com/car/${_id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [car.quantity, _id]);

  const delivered = () => {
    const quantity = parseInt(car.quantity) - 1;
    const newQuantity = { quantity };

    fetch(`https://mercedez-warehouse.herokuapp.com/car/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
      });
  };

  const [restockQuantity, setRestockQuantity] = useState();

  const handleChange = (e) => {
    setRestockQuantity(e.target.value);
  };

  const restock = (e) => {
    e.preventDefault();
    const quantity = parseInt(car.quantity) + parseInt(restockQuantity);
    const newQuantity = { quantity };
    fetch(`https://mercedez-warehouse.herokuapp.com/car/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
      });
  };

  return (
    <div className="car-update">
      <div className="car-details-banner">
        <div className="car-details">
          <img src={car.images} alt="" />
          <div className="details-info">
            <h1>{car.name}</h1>
            <p>starting from &#x20B9; {car.price}</p>
            <p>Available cars {car.quantity}</p>
            <button onClick={delivered} className="button">
              delivered
            </button>
            <h4>Want to restock? </h4>
            <form action="" onSubmit={restock}>
              <input
                type="number"
                placeholder="Type the quantity"
                onBlur={handleChange}
                required
              />
              <input type="submit" value="restock" className="button" />
            </form>
          </div>
        </div>

        <div className="car-description">
          <h6>{car.details}</h6>
          <Link to={"/manageInventories"} className="link">
            Manage Inventories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarUpdate;
