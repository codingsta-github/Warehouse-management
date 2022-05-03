import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CarUpdate = () => {
  const { _id } = useParams();
  const [car, setCar] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/car/${_id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [_id]);

  const delivered = () => {
    const quantity = parseInt(car.quantity) - 1;
    const newQuantity={quantity}
    fetch(`http://localhost:5000/car/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>car{car.name}</h1>

      <h1>quantity : {car.quantity}</h1>
      <button onClick={delivered}>delivered</button>
    </div>
  );
};

export default CarUpdate;
