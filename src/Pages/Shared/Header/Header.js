import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="/home">Guru Mann</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Home#features">Features</Nav.Link>
              <Nav.Link href="home#services">Services</Nav.Link>
              
            </Nav>
            <Nav>
              <Link to={"/login"}>login</Link>
              <Link to={"/cart"}>cart</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
