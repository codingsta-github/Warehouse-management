import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCars from '../../Hooks/useCars';
const CarUpdate = () => {
    const {_id}=useParams()
    console.log(useParams())
    const [car,setCar]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/car/${_id}`)
        .then(res=>res.json())
        .then(data=>setCar(data))
    },[])
    return (
        <div>
            <h1>car{car.name}</h1>
        </div>
    );
};

export default CarUpdate;