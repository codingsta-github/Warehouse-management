import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
const SignUp = () => {
  const [email,setEmail]=useState([])
  const [password,setPassword]=useState([])
  const [confirmPassword,setConfirmPassword]=useState([])
  const [error,setError]=useState([])
  const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)

  const navigate=useNavigate()
  const navigateLogin=()=>{
    navigate("/login")
  }
  if (user) {
    navigate('/home')
  }
  const handleEmailBlur=(e)=>{
    setEmail(e.target.value)
  }
  const handlePasswordBlur=(e)=>{
    setPassword(e.target.value)
  }
  const handleConfirmPasswordBlur=(e)=>{
    setConfirmPassword(e.target.value)
  }
  const handleCreateUser=(e)=>{
    e.preventDefault()
    if(password!==confirmPassword){
      setError('Password does not match')
      return
    }
    if (password.length<6) {
      setError("PassWord should be 6 characters or longer")
      return
    }
    createUserWithEmailAndPassword(email,password)
    .then(result=>{
      const user=result.user
      console.log(user)
    })
  }
    return (
        <div>
            <form onSubmit={handleCreateUser} action="">
      <div>
        <div className="form-container">
          <div>
            <h1 className="form-title">Sign Up</h1>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="Confirm-password">Confirm Password</label>
              <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
              <p style={{color:"red"}}>{error}</p>
            </div>
            <input type="submit" className="form-submit" value="Sign Up" />
           
            <p>Already have an account? <Link className="form-link" to="/login">Login account</Link> </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
      
     
    </form>
        </div>
    );
};

export default SignUp;