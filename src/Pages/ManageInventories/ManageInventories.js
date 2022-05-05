import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useCars from "../../Hooks/useCars";

const ManageInventories = () => {
  const [cars, setCars] = useCars();

  const removeItem = (id) => {
    fetch(`https://thawing-headland-66611.herokuapp.com/car/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = cars.filter((car) => car._id !== id);
        setCars(remaining);
      });
  };

  const navigate = useNavigate();
  const addNewItem = () => {
    navigate('/addInventoryItem')
  };

  return (
    <div>
      <h1>ManageInventories</h1>

      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car) => (
            <tr key={car._id}>
              <td>{car.name}</td>
              <td>{car.price}</td>
              <td>{car.quantity}</td>
              <td>
                <button onClick={() => removeItem(car._id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button onClick={addNewItem}>Add new item</button>
    </div>
  );
};

export default ManageInventories;
