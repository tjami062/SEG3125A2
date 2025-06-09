import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGamepad, FaDesktop, FaImages, FaHeadset, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeContext"; // ✅ Import theme context
import "./App.css";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme(); // ✅ Use theme state

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="clickable-brand d-flex align-items-center"
        >
          <img
            src="/images/logo.svg"
            alt="Logo"
            height="30"
            className="me-2"
          />
          PC Builder
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/builder">
              <FaGamepad className="me-2" />
              Build
            </Nav.Link>
            <Nav.Link as={Link} to="/workstations">
              <FaDesktop className="me-2" />
              Workstations
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              <FaImages className="me-2" />
              Gallery
            </Nav.Link>
            <Nav.Link href="#support">
              <FaHeadset className="me-2" />
              Support
            </Nav.Link>
          </Nav>

          {/* 🌙 Theme Toggle Button */}
          <Nav className="ms-auto">
            <Nav.Link onClick={toggleTheme} style={{ cursor: "pointer" }} title="Toggle light/dark mode">
              {darkMode ? <FaSun /> : <FaMoon />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;