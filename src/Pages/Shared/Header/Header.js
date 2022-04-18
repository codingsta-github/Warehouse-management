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
              {
                user?
                <button onClick={handleSignOut}>sign out</button>
                : <Nav.Link as={Link} to="/login">login</Nav.Link>
              }
              
              <Nav.Link as={Link} to="/cart">cart</Nav.Link>
              <Nav.Link as={Link} to="/shipment">shipment</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
