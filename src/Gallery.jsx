import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Header from "./Header";
import "./Gallery.css";

import Footer from "./Footer";

const galleryImages = [
  {
    src: "/images/FI_Antec-C5-ARGB-RTX-4070-SUPER.jpg",
    alt: "Antec C5 ARGB Build",
    specs: "Intel i7 · RTX 4070 SUPER · 32GB DDR5 · 1TB SSD",
  },
  {
    src: "/images/FI_APNX-C1-ASUS-9070-XT.jpg",
    alt: "APNX C1 with ASUS 7900 XT",
    specs: "Ryzen 9 · RX 7900 XT · 64GB RAM · 2TB SSD",
  },
  {
    src: "/images/FI_APNX-V1-4070-Ti-SUPER.jpg",
    alt: "APNX V1 4070 Ti Super",
    specs: "Intel i9 · RTX 4070 Ti SUPER · 64GB RAM · 2TB NVMe",
  },
  {
    src: "/images/FI_HAVN-HS420-4080-SUPER.jpg",
    alt: "HAVN HS420 4080 SUPER",
    specs: "Ryzen 7 · RTX 4080 SUPER · 32GB RAM · 1TB SSD",
  },
  {
    src: "/images/FI_Sky-Two-GTX-Prime-4070-SUPER.jpg",
    alt: "Sky Two Prime 4070 SUPER",
    specs: "Intel i5 · RTX 4070 SUPER · 16GB RAM · 1TB SSD",
  },
  {
    src: "/images/FI_Thermaltake-x-4080-SUPER-Sim-Rig-Build.jpg",
    alt: "Thermaltake 4080 Sim Rig",
    specs: "Intel i9 · RTX 4080 SUPER · Sim Ready · 2TB NVMe",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Trigger loaded = true once component mounts to start animations
  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleClose = () => setSelectedImage(null);
  const handleShow = (img) => setSelectedImage(img);

  return (
    <>
      <Header />

      {/* Intro Section */}
      <div className="gallery-intro text-white text-center py-5">
        <Container>
          <h1>Build Gallery</h1>
          <p className="lead">Showcasing high-performance builds featuring the latest GPUs.</p>
        </Container>
      </div>

      {/* Gallery Grid */}
      <Container className="py-5">
        <Row className="gy-4">
          {galleryImages.map((img, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              className={`fade-in-item${loaded ? " visible" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="gallery-image-wrapper position-relative"
                onClick={() => handleShow(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="gallery-image img-fluid rounded"
                />
                <div className="gallery-overlay">
                  <p className="gallery-text">{img.specs}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Lightbox Modal */}
      <Modal show={!!selectedImage} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0 bg-dark text-white">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-100 rounded"
            />
          )}
        </Modal.Body>
      </Modal>
      <Footer />
    </>
    
  );
};

export default Gallery;