import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "./ThemeContext"; // ✅ Theme context hook
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const HomePage = () => {
  const { darkMode } = useTheme(); // ✅ Use theme context

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header />

      {/* Hero Section */}
      <div className="intro-section text-center">
        <Container className="py-5">
          <h1 className="display-4">Build Your Custom PC</h1>
          <p className="lead">Choose your parts. We’ll help you make it awesome.</p>
          <Link to="/builder">
            <Button variant={darkMode ? "light" : "dark"} size="lg" className="mb-4">
              Start Building
            </Button>
          </Link>

          {/* Hero Images */}
          <Row className="justify-content-center gy-4">
            <Col md={6}>
              <Image
                src="/images/FI_APNX-V1-4070-Ti-SUPER.jpg"
                alt="Purple RGB Build"
                fluid
                rounded
                className="gallery-img"
              />
            </Col>
            <Col md={6}>
              <Image
                src="/images/FI_Antec-C5-ARGB-RTX-4070-SUPER.jpg"
                alt="White and Blue RGB Build"
                fluid
                rounded
                className="gallery-img"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Component Highlights */}
      <Container className="mt-5">
        <Row>
          <Col md={4} className="text-center mb-4">
            <h3>Powerful CPUs</h3>
            <p>Top-tier processors from Intel and AMD to handle your workloads and games.</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <h3>High-End GPUs</h3>
            <p>Graphics cards built for gaming, streaming, and heavy creative tasks.</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <h3>Sleek Cases</h3>
            <p>Modern cases for airflow, aesthetics, and ease of building.</p>
          </Col>
        </Row>
      </Container>

      {/* Workstations Section */}
      <div className="workstations-section py-5" id="workstations">
        <Container>
          <h2 className="text-center mb-5">Workstation Builds</h2>

          <Row className="align-items-center mb-5">
            <Col md={6} className="mb-3 mb-md-0">
              <img
                src="/images/lenovo-thinkstation-p3-tiny.png"
                alt="Creator Workstation"
                className="img-fluid workstation-img"
              />
            </Col>
            <Col md={6}>
              <h4>Creator Workstation</h4>
              <p>
                Designed for 3D modeling, video editing, and multitasking with powerful CPUs and high VRAM GPUs.
                Ideal for professionals using Blender, Adobe Suite, or DaVinci Resolve.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center flex-md-row-reverse">
            <Col md={6} className="mb-3 mb-md-0">
              <img
                src="/images/gw54zcu14k0mpf4klaj95ue8ujapmn835349.avif"
                alt="Engineering Workstation"
                className="img-fluid workstation-img"
              />
            </Col>
            <Col md={6}>
              <h4>Engineering Workstation</h4>
              <p>
                Optimized for CAD applications, simulations, and software development with a balanced blend of performance
                and cooling — perfect for AutoCAD, SolidWorks, and programming environments.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section py-5">
        <Container>
          <h2 className="text-center mb-5">User Feedback</h2>
          <Row className="justify-content-center text-center">
            <Col md={8} className="testimonial-entry mb-5">
              <p className="testimonial-quote">"The clean UI and build flow made this my go-to site for picking parts."</p>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-author">– Lucas R.</div>
            </Col>
            <Col md={8} className="testimonial-entry mb-5">
              <p className="testimonial-quote">"It’s like PCPartPicker but sleeker — smooth navigation and solid recommendations."</p>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-author">– Rachel L.</div>
            </Col>
            <Col md={8} className="testimonial-entry">
              <p className="testimonial-quote">"I used this with my son to build his first gaming PC — super helpful!"</p>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-author">– Matt W.</div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;