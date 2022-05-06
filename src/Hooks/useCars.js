import { useEffect, useState } from 'react';

const useCars = () => {
    const [cars,setCars]=useState([])
    useEffect(()=>{
        fetch('https://mercedez-warehouse.herokuapp.com/car')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return [cars,setCars];
};

export default useCars;