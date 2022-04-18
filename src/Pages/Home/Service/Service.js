import React from 'react';
import './Service.css'
const Service = (props) => {
    const {images,name,details,price}=props.service
    const {addToCart}=props
    return (
        <div className='service'>
            <img src={images} width="100%" alt="" />
            <button className='service-button' onClick={()=>addToCart(props.service)}>ADD TO CHART</button>
            <div className="service-details">
            <div className="service-info">
                <h1>{name}</h1>
                <p>{details}</p>                
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