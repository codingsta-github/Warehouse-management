import React from 'react';
import './AddedServices.css'
const AddedServices = ({service}) => {
    const {images,name,price}=service
    
    return (
        <div className='added-Services'>
            <img src={images} alt="" />
            <h4>{name}</h4>
            <p>$ {price}</p>
        </div>
    );
};

export default AddedServices;