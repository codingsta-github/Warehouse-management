import React, { useState } from "react";

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

    fetch('https://thawing-headland-66611.herokuapp.com/car',{
        method:'POST',
        headers:{
            'content-type':'application/json'

        },
        body:JSON.stringify(newItem)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data);})

  };

  return (
    <div>
      <h1>Add Inventory Item</h1>
      <form action="" onSubmit={addNewItem}>
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
      </form>
    </div>
  );
};

export default AddInventoryItem;
