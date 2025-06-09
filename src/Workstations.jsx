import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom"; // Add this line
import Footer from "./Footer";
import "./App.css";

const workstations = [
  {
    purchaseId: "p3-tiny",
    name: "Lenovo ThinkStation P3 Tiny",
    image: "/images/lenovo-thinkstation-p3-tiny.png", 
    specs: ["Intel Core i7-13700T", "32GB DDR5", "1TB SSD", "NVIDIA T1000"],
    description: "Compact powerhouse designed for professionals who need workstation performance in a tiny form factor.",
    price: "$1,299.00 CAD",
  },
  {
    purchaseId: "p3-ultra",
    name: "Lenovo ThinkStation P3 Ultra SFF",
    image: "/images/gw54zcu14k0mpf4klaj95ue8ujapmn835349.avif", 
    specs: ["Intel Core i9-13900", "64GB DDR5", "2TB SSD", "NVIDIA RTX A2000"],
    description: "A versatile, small form factor workstation engineered for CAD, rendering, and high-performance computing.",
    price: "$2,199.00 CAD",
  },
];

const Workstations = () => {
  return (
    <>
      <Header />

      <div className="text-white text-center py-5" style={{ background: "#1a1a1a" }}>
        <Container>
          <h1>Lenovo Workstations</h1>
          <p className="lead">Explore compact, high-performance ThinkStations built for creators, engineers, and professionals.</p>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="gy-5">
          {workstations.map((ws, idx) => (
            <Col md={6} key={idx}>
              <div className="workstation-card bg-light rounded p-4 shadow-sm">
                <img
                  src={ws.image}
                  alt={ws.name}
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: "250px", objectFit: "contain" }}
                />
                <h4>{ws.name}</h4>
                <p className="text-muted">{ws.description}</p>
                <div className="mb-3">
                  {ws.specs.map((spec, i) => (
                    <Badge key={i} bg="dark" className="me-1 mb-1">{spec}</Badge>
                  ))}
                </div>
                <h5 className="text-primary mb-3">{ws.price}</h5>

                {/* Updated purchase button */}
                <Link to={`/purchase/${ws.purchaseId}`}>
                  <Button variant="outline-dark">Purchase</Button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Workstations;
