import React, { useState } from 'react';
import { Container, Table, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './SystemBuilder.css';

const componentOptions = {
  Processor: [
    { title: 'AMD Ryzen 7 7800X3D', price: 449, socket: 'AM5', wattage: 120 },
    { title: 'Intel Core i7-14700K', price: 419, socket: 'LGA1700', wattage: 125 },
    { title: 'AMD Ryzen 5 7600X', price: 299, socket: 'AM5', wattage: 105 },
  ],
  Motherboard: [
    { title: 'ASUS ROG STRIX X670E', price: 379, socket: 'AM5' },
    { title: 'MSI MAG B650 TOMAHAWK', price: 259, socket: 'AM5' },
    { title: 'ASUS Z790 TUF Gaming', price: 339, socket: 'LGA1700' },
  ],
  'CPU Cooler': [
    { title: 'Noctua NH-D15 Chromax', price: 115 },
    { title: 'be quiet! Dark Rock Pro 4', price: 90 },
  ],
  Case: [
    { title: 'Fractal Design North', price: 130 },
    { title: 'Lian Li O11 Dynamic EVO', price: 150 },
  ],
  'Graphics Card': [
    { title: 'NVIDIA RTX 4070 SUPER', price: 599, wattage: 220 },
    { title: 'AMD Radeon RX 7900 XT', price: 699, wattage: 300 },
  ],
  RAM: [
    { title: 'Corsair Vengeance DDR5 32GB', price: 120 },
    { title: 'G.Skill Trident Z5 RGB 32GB', price: 135 },
  ],
  Storage: [
    { title: 'Samsung 990 PRO 1TB NVMe', price: 160 },
    { title: 'WD Black SN850X 2TB NVMe', price: 230 },
  ],
  'Case Cooler': [
    { title: 'Noctua NF-A12x25 PWM', price: 30 },
    { title: 'ARCTIC P12 PWM PST 5-Pack', price: 45 },
  ],
  'Power Supply': [
    { title: 'Corsair RM850x ATX 3.0', price: 140, wattage: 850 },
    { title: 'Seasonic FOCUS GX-750', price: 120, wattage: 750 },
  ],
  Monitor: [
    { title: 'ASUS ROG Swift 27" 1440p 240Hz', price: 649 },
    { title: 'LG UltraGear 27" 1440p 165Hz', price: 399 },
  ],
};

function SystemBuilder() {
  const [selectedComponents, setSelectedComponents] = useState({});

  const handleSelect = (component, value) => {
    const option = componentOptions[component].find((o) => o.title === value);
    setSelectedComponents((prev) => ({
      ...prev,
      [component]: option,
    }));
  };

  const total = Object.values(selectedComponents).reduce(
    (acc, item) => acc + (item?.price || 0),
    0
  );

  // Compatibility Checks
  const cpu = selectedComponents['Processor'];
  const mobo = selectedComponents['Motherboard'];
  const gpu = selectedComponents['Graphics Card'];
  const psu = selectedComponents['Power Supply'];

  const wattageRequired =
    (cpu?.wattage || 0) + (gpu?.wattage || 0) + 100; // Base load for fans/drives

  const socketMismatch = cpu && mobo && cpu.socket !== mobo.socket;
  const insufficientPSU = psu && wattageRequired > (psu.wattage || 0);

  return (
    <>
      <Header />
      <Container className="my-5">
        <div className="builder-box-white p-4 shadow-sm">

          {/* Compatibility Warnings */}
          {socketMismatch && (
            <Alert variant="danger">
              ⚠️ CPU and Motherboard sockets do not match ({cpu.socket} vs {mobo.socket})
            </Alert>
          )}

          {insufficientPSU && (
            <Alert variant="warning">
              ⚠️ Estimated power draw is {wattageRequired}W, but selected PSU provides only {psu.wattage}W.
            </Alert>
          )}

          <Table bordered responsive className="builder-table-white text-dark">
            <thead className="table-dark">
              <tr>
                <th>Component</th>
                <th>Select Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(componentOptions).map((component) => (
                <tr key={component}>
                  <td>{component}</td>
                  <td>
                    <Form.Select
                      value={selectedComponents[component]?.title || ''}
                      onChange={(e) => handleSelect(component, e.target.value)}
                    >
                      <option value="">-- Select --</option>
                      {componentOptions[component].map((option) => (
                        <option key={option.title} value={option.title}>
                          {option.title} (${option.price})
                        </option>
                      ))}
                    </Form.Select>
                  </td>
                  <td>{selectedComponents[component]?.title || '—'}</td>
                  <td>
                    {selectedComponents[component]
                      ? `$${selectedComponents[component].price.toFixed(2)}`
                      : '$0.00'}
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() =>
                        setSelectedComponents((prev) => {
                          const copy = { ...prev };
                          delete copy[component];
                          return copy;
                        })
                      }
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td><strong>Total</strong></td>
                <td colSpan="4" className="text-end">
                  <strong>${total.toFixed(2)}</strong>
                </td>
              </tr>
              <tr>
                <td><strong>Accessories</strong></td>
                <td colSpan="4">Keyboard, Mouse, Speakers, Webcam, etc.</td>
              </tr>
              <tr>
                <td><strong>Expansions / Networking</strong></td>
                <td colSpan="4">Sound Card, Wi-Fi Adapter, etc.</td>
              </tr>
              <tr>
                <td><strong>Software</strong></td>
                <td colSpan="4">Operating System, Antivirus</td>
              </tr>
            </tbody>
          </Table>

          <div className="text-end mt-4">
            <Link to="/">
              <Button variant="outline-dark">← Back to Home</Button>
            </Link>
          </div>

          <p className="disclaimer mt-4 small text-muted">
            * PC Builder™ earns commission from linked products via Amazon Associates.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default SystemBuilder;
