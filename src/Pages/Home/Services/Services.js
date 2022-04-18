import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import Cart from "../../Cart/Cart";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useServices();
  const [cart,setCart]=useState([])
  const addToCart=(services)=>{
    const newArray=[...cart,services]
    setCart(newArray)
}

  return (
    <div className="service-container" id="services">
      <div className="service-heading">
      <h1>CHOOSE THE PROGRAM</h1>
      <h4>NEW GYM EXPERIENCE</h4>
      </div>
      <div className="service-cart">
      <div className="services">
      {
          services.map(service=><Service service={service} key={service.id} addToCart={addToCart}></Service>)
      }
      </div>
      <div className="cart-container">
      <Cart cart={cart}></Cart>
      </div>
      </div>

    </div>
  );
};

export default Services;
