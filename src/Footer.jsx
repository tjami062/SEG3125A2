import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 py-4">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="mb-2">PC Builder</h5>
            <p className="mb-0">© {new Date().getFullYear()} CustomBuilt Inc. All rights reserved.</p>
          </Col>
          <Col md={4}>
            <ul className="footer-links list-unstyled mb-0">
              <li><a href="/">Home</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/workstations">Workstations</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <div className="footer-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;