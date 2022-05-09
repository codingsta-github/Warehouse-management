import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useUserCars from '../../Hooks/useUserCars';
import './MyItems.css'
const MyItems = () => {
    const [userCars, setUserCars] = useUserCars();
  
    const removeItem = (id) => {
      fetch(`https://mercedez-warehouse.herokuapp.com/car/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = userCars.filter((car) => car._id !== id);
          setUserCars(remaining);
        });
    };
  
  
    return (
      <div className="my-items">
        <h1>My Items</h1>
  
        <div className="table">
          <Table responsive>
            <thead>
              <tr>
                <th>Car</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
  
            <tbody className="align-middle">
              {userCars.map((car) => (
                <tr key={car._id}>
                  <td>
                    <img src={car.images} height="50px" alt="" />
                  </td>
                  <td>{car.name}</td>
                  <td>{car.price}</td>
                  <td>{car.quantity}</td>
                  <td>
                    <button
                      onClick={() => removeItem(car._id)}
                      className="remove"
                    >
                      <FontAwesomeIcon icon={faTrashArrowUp} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="add-item">
          <Link to={"/addInventoryItem"} className="link">
            {" "}
            Add New Item +{" "}
          </Link>
        </div>
      </div>
    );
  };

export default MyItems;