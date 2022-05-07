import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import "../Login/Login.css";
import { Form } from "react-bootstrap";
const SignUp = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);
  const [error, setError] = useState([]);
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  
  if (user) {
    navigate("/home");
  }
  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password does not match");
      return;
    }
    if (password.length < 6) {
      setError("PassWord should be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div>
      <div className="form-container">
        <Form onSubmit={handleCreateUser}>
          <h1 className="text-center">Sign Up</h1>
          <Form.Group className="m-3">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              placeholder="example@example.com"
              required
              onBlur={handleNameBlur}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>Enter your email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@example.com"
              required
              onBlur={handleEmailBlur}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Example :abc@656#1_"
              required
              onBlur={handlePasswordBlur}
            />
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Example :abc@656#1_"
              required
              onBlur={handleConfirmPasswordBlur}
            />
          </Form.Group>
          <input type="submit" className="button" value="Sign Up" />
          <p style={{ color: "red" }}>{error}</p>
          
        </Form>
        <div className="ms-3">
          <p>
            Already have an account?{" "}
            <Link className="form-link" to="/login">
              Login account
            </Link>{" "}
          </p>
        </div>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
