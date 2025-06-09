import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  ListGroup,
} from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import "./Purchase.css";

const workstationData = {
  "p3-tiny": {
    name: "Lenovo ThinkStation P3 Tiny",
    specs: ["Intel Core i7", "32GB DDR5", "1TB SSD", "NVIDIA T1000"],
    price: 1299.0,
    image: "/images/lenovo-thinkstation-p3-tiny.png",
  },
  "p3-ultra": {
    name: "Lenovo ThinkStation P3 Ultra SFF",
    specs: ["Intel Core i9", "64GB DDR5", "2TB SSD", "RTX A2000"],
    price: 2199.0,
    image: "/images/gw54zcu14k0mpf4klaj95ue8ujapmn835349.avif",
  },
};

const regionTaxRates = {
  Ontario: 0.13,
  Quebec: 0.14975,
  Alberta: 0.05,
  "British Columbia": 0.12,
  "Nova Scotia": 0.15,
};

const shippingCost = 25.0;

const Purchase = () => {
  const { id } = useParams();
  const workstation = workstationData[id];

  const [region, setRegion] = useState("Ontario");
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (workstation) {
      const taxRate = regionTaxRates[region] || 0;
      const subtotal = workstation.price + shippingCost;
      const calculatedTax = subtotal * taxRate;
      const finalTotal = subtotal + calculatedTax;
      setTax(calculatedTax);
      setTotal(finalTotal);
    }
  }, [region, workstation]);

  if (!workstation) {
    return (
      <Container className="text-center py-5 text-white">
        <h2>Workstation Not Found</h2>
        <p>Please return to the Workstations page and try again.</p>
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Container className="text-white py-5">
        <Row>
          <Col md={6}>
            <img
              src={workstation.image}
              alt={workstation.name}
              className="img-fluid rounded shadow mb-4"
            />
            <Card bg="dark" text="light">
              <Card.Header>System Overview</Card.Header>
              <ListGroup variant="flush">
                {workstation.specs.map((spec, index) => (
                  <ListGroup.Item key={index} className="bg-dark text-white">
                    {spec}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>

          <Col md={6}>
            <h2>{workstation.name}</h2>
            <Card bg="dark" text="light" className="p-3 my-3">
              <Form.Group controlId="regionSelect">
                <Form.Label>Select Shipping Region</Form.Label>
                <Form.Select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  {Object.keys(regionTaxRates).map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <hr />
              <p>Base Price: ${workstation.price.toFixed(2)}</p>
              <p>Shipping: ${shippingCost.toFixed(2)}</p>
              <p>Tax ({regionTaxRates[region] * 100}%): ${tax.toFixed(2)}</p>
              <h5>Total: ${total.toFixed(2)}</h5>
            </Card>

            <Button variant="success" size="lg">
              Confirm Purchase
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Purchase;