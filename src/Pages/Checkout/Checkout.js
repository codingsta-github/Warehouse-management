import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import "../Login/Login.css"
const Checkout = () => {
    const [user]=useAuthState(auth)

      return (
             
          <div className="form-container">
            <div>
              <h1 className="form-title">Checkout Information</h1>
              <div className="input-group">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input value={user?.email} readOnly type="email" name="email" id="" required />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Your phone number</label>
                <input type="number" name="phone" id="" required />
              </div>
              <div className="input-group">
                <label htmlFor="address">Address</label>
                <input  type="text" name="phone" id="" required />
              </div>
              
              <input type="submit" className="form-submit" value="Add to shipping" />
             
            </div>
          </div>
      )};

export default Checkout;