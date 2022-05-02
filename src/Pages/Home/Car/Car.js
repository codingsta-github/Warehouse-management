import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Car.css'
const Service = (props) => {
    const {_id,images,name,details,price}=props.car
    const navigate=useNavigate()
    const updateCar=()=>{
        navigate(`car/${_id}`)
    }
    return (
        <div className='service'>
            <img src={images} width="100%" alt="" />
            <button className='service-button' onClick={updateCar}>update</button>
            <div className="service-details">
            <div className="service-info">
                <h1>{name}</h1>
                <p>{details}</p>   
                <p>{_id}</p>             
            </div>
            <div className="service-price">
                <h1>$ {price} <span>/ month</span></h1>
                <p></p>                
            </div>
            </div>
        </div>
    );
};

export default Service;