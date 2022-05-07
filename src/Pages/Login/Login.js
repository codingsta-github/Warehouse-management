import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";
import axios from "axios";
import { Form } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  // const [error,setError]=useState([])
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    // navigate(from, { replace: true });
  }
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleUserSignIn = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(email, password);

    const { data } = await axios.post(
      `https://mercedez-warehouse.herokuapp.com/login`,
      { email }
    );
    localStorage.setItem("token", data.token);
    navigate(from, { replace: true });
  };
  const resetPassword = () => {
    if (email) {
      sendPasswordResetEmail(email);
      toast("Email sent");
    }
  };

  return (
    <div>
      <div className="form-container">
        <Form onSubmit={handleUserSignIn}>
          <h1 className="text-center">Login</h1>
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
            <Form.Label>Enter your password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Example :abc@656#1_"
              required
              onBlur={handlePasswordBlur}
            />
          </Form.Group>

          <input type="submit" value="Login" className="button" />
          <p>{error?.message}</p>
          {loading && <p>loading...</p>}
        </Form>
        <div className="ms-3">
          <p>
            New to Mercedes-Benz?{" "}
            <Link className="form-link" to="/signup">
              Create account
            </Link>{" "}
          </p>
          <p>
            Forget password?
            <button onClick={resetPassword} className="button">
              Reset Password
            </button>
          </p>
        </div>
      </div>

      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
