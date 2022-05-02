import React from 'react';
import './Car.css'
const Service = (props) => {
    const {id,images,name,details,price}=props.service
    return (
        <div className='service'>
            <img src={images} width="100%" alt="" />
            <button className='service-button' >update</button>
            <div className="service-details">
            <div className="service-info">
                <h1>{name}</h1>
                <p>{details}</p>   
                <p>{id}</p>             
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