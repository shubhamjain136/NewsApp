import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
function NavbarComponent() {
  return (
    <div className="sticky-top mb-5">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <NavLink to="/" className="nav-link">
            <Navbar.Brand href="">My News</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
              {/* <Nav.Link> */}
              <Link to="/" className="nav-link">
                Home
              </Link>
              <NavLink to="/business" className="nav-link">
                Business
              </NavLink>
              <NavLink to="/health" className="nav-link">
                Health
              </NavLink>
              <NavLink to="/science" className="nav-link">
                Science
              </NavLink>
              <NavLink to="/technology" className="nav-link">
                Technology
              </NavLink>
              <NavLink to="/sports" className="nav-link">
                Sports
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
