import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>car{car.name}</h1>

      <h1>quantity : {car.quantity}</h1>
      <button onClick={delivered}>delivered</button>

      <form action="" onSubmit={restock}>
        <input
          type="number"
          placeholder="restock"
          onBlur={handleChange}
          required
        />
        <input type="submit" value="restock" />
      </form>
    </div>
  );
};

export default CarUpdate;
