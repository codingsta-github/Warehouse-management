import React from 'react';
import { Link } from 'react-router-dom';
import AddedServices from './addedServices/AddedServices';
import './Cart.css'
const Cart = ({cart}) => {
    const services=[...new Set(cart)]
    let total = 0;
    for(const product of services){
        total = total + product.price;
    }
    
    return (
        <div className='cart'>
            {services.map(service=><AddedServices service={service} key={service.id}/>)}
            <h4>Order Summary</h4>
            <h5>Grand Total: {total}</h5>
            <Link to="/shipment">
                        <button>Review Order </button>
                    </Link>
        </div>
    );
};

export default Cart;