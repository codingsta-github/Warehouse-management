import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth)
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/home">Guru Mann</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Home#features">Features</Nav.Link>
              <Nav.Link href="home#services">Services</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              {
                user?
                <button onClick={handleSignOut}>Sign out</button>
                : <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
              {
                user?
                <></>
                : <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
