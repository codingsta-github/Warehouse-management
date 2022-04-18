import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth)
    const [email,setEmail]=useState([])
    const [name,setName]=useState([])
    const [address,setAddress]=useState([])
    const [phone,setPhone]=useState([])
    const [error,setError]=useState([])
    const navigate=useNavigate()
    
    const handleNameBlur=(e)=>{
      setName(e.target.value)
    }  
    const handleEmailBlur=(e)=>{
      setEmail(e.target.value)
    }
    const handlePhoneBlur=(e)=>{
      setPhone(e.target.value)
    }
    const handleAddressBlur=(e)=>{
      setAddress(e.target.value)
    }
    // const handleCreateUser=(e)=>{
    //   e.preventDefault()
    //   if(password!==confirmPassword){
    //     setError('Password does not match')
    //     return
    //   }
    //   if (password.length<6) {
    //     setError("PassWord should be 6 characters or longer")
    //     return
    //   }
    //   createUserWithEmailAndPassword(email,password)
    //   .then(result=>{
    //     const user=result.user
    //     console.log(user)
    //   })
    // }
      return (
          <div>
              {/* <form onSubmit={handleCreateUser} action=""> */}
        <div>
          <div className="form-container">
            <div>
              <h1 className="form-title">Shipment Information</h1>
              <div className="input-group">
                <label htmlFor="name">Your name</label>
                <input onBlur={handleNameBlur} type="text" name="name" id="" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input value={user?.email} readOnly type="email" name="email" id="" required />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Your phone number</label>
                <input onBlur={handlePhoneBlur} type="number" name="phone" id="" required />
              </div>
              <div className="input-group">
                <label htmlFor="address">Address</label>
                <input onBlur={handleAddressBlur} type="text" name="phone" id="" required />
              </div>
              
              <input type="submit" className="form-submit" value="Add to shipping" />
             
            </div>
          </div>
        </div>
        
{/*        
      </form> */}
          </div>
      )};

export default Shipment;