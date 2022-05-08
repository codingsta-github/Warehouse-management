import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
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
       >
        <Container>
          <Navbar.Brand as={Link} to="/"><img src="logo.png" width="80px" className="me-5 p-2" alt="" />
            Mercedes-Benz</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            
          <Nav>
              {user ? (
                <Nav.Link onClick={handleSignOut} className="fs-4 bg-dark text-light"><FontAwesomeIcon icon={faUserCheck} /></Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login" className="fs-4 bg-dark text-light"><FontAwesomeIcon icon={faUser} />
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
              <Nav.Link as={Link} to="/cars" className=" text-light">Cars</Nav.Link>
              <Nav.Link as={Link} to="/recommendation" className=" text-light">Recommendation</Nav.Link>
              <Nav.Link as={Link} to="/blogs" className=" text-light">Blog</Nav.Link>
            </Nav>

            <Nav>
              {user ? (
                <Nav.Link as={Link} to="/manageInventories" className="fs-6 bg-dark text-light">Manage Items</Nav.Link>
              ):<></>}
              
            </Nav>
            <Nav>
              {user ? (
                <Nav.Link as={Link} to="/addInventoryItem" className="fs-6 bg-dark text-light">Add Items</Nav.Link>
              ):<></>}
              
            </Nav>
            <Nav>
              {user ? (
                <Nav.Link as={Link} to="/manageInventories" className="fs-6 bg-dark text-light">My Items</Nav.Link>
              ):<></>}
              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
