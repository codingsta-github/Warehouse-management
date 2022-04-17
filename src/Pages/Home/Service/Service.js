import React from 'react';
import './Service.css'
const Service = ({service}) => {
    console.log(service)
    const {name}=service
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Service;