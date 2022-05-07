import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './AddInventoryItem.css'
const AddInventoryItem = () => {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [image, setImage] = useState([]);
  const [details, setDetails] = useState([]);

  const onNameBlur = (e) => {
    setName(e.target.value);
  };
  const onPriceBlur = (e) => {
    setPrice(e.target.value);
  };
  const onQuantityBlur = (e) => {
    setQuantity(e.target.value);
  };
  const onImageBlur = (e) => {
    setImage(e.target.value);
  };
  const onDetailsBlur = (e) => {
    setDetails(e.target.value);
  };

  const addNewItem = (e) => {
    e.preventDefault();
    const newItem = { name, price, quantity, image, details };

    fetch("https://mercedez-warehouse.herokuapp.com/car", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="add-item-container">
      <h1>Add Inventory Item</h1>
      <div className="form-container">
      {/* <form action="" onSubmit={addNewItem}>
        <input type="text" placeholder="name" onBlur={onNameBlur} required />
        <input
          type="number"
          placeholder="price"
          onBlur={onPriceBlur}
          required
        />
        <input
          type="number"
          placeholder="quantity"
          onBlur={onQuantityBlur}
          required
        />
        <input
          type="text"
          placeholder="Image link"
          onBlur={onImageBlur}
          required
        />
        <input
          type="text"
          placeholder="details"
          onBlur={onDetailsBlur}
          required
        />
        <input type="submit" value="Add New Item" />
      </form> */}

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default AddInventoryItem;
