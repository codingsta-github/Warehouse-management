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
            
            <h4>Program cart Summary</h4>
            <p>*you cant not add a program more than once</p>
            {services.map(service=><AddedServices service={service} key={service.id}/>)}
            <h5> Total: {total}</h5>
            <Link to="/checkout">
                        <button className='checkout-button'>Check Out </button>
                    </Link>
        </div>
    );
};

export default Cart;