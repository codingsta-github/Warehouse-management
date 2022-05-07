import React from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useCars from "../../Hooks/useCars";
import './ManageInventories.css'
const ManageInventories = () => {
  const [cars, setCars] = useCars();

  const removeItem = (id) => {
    fetch(`https://mercedez-warehouse.herokuapp.com/car/${id}`, {
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
    <div className="manage-inventories">
      <h1>Manage Inventories</h1>

      <div className="table">
      <Table responsive>
        <thead >
          <tr>
            <th>Car</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="align-middle">
          {cars.map((car) => (
            <tr key={car._id}>
              <td><img src={car.images} height="50px" alt="" /></td>
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
      </div>
      <div className="add-item">
      <Link to={'/addInventoryItem'} className="link"> Add New Item + </Link>
      </div>
    </div>
  );
};

export default ManageInventories;
