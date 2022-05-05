import { useEffect, useState } from 'react';

const useCars = () => {
    const [cars,setCars]=useState([])
    useEffect(()=>{
        fetch('http://thawing-headland-66611.herokuapp.com/car')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return [cars,setCars];
};

export default useCars;