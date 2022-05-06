import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    
    <>
      <Navbar bg="dark"
        variant="dark"
        sticky="top">
        <Container>
          <Navbar.Brand href="#home"><img src="logo.png" width="80px" className="me-5 p-2" alt="" />
            Mercedes-Benz</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav>
              {user ? (
                <button onClick={handleSignOut}>Sign out</button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {user ? (
                <></>
              ) : (
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div className="margin"></div>

      <Navbar
        className=" fs-5"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container className="">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="Home#features">Features</Nav.Link>
              <Nav.Link href="home#cars">Cars</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
