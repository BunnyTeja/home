import React from 'react';
import { Col } from "react-bootstrap";

const CertificationCard = ({ certification }) => {
  return (
    <Col md={6}>
      <div style={{ marginBottom: '30px' }} className="certification-card">
        <img src={certification.image} alt={certification.title} style={{ maxWidth: '60%', height: 'auto' }} className="certification-image" />
        <div className="certification-details">
          <h4>{certification.title}</h4>
          <p>{certification.details}</p>
        </div>
      </div>
    </Col>
  );
}

export default CertificationCard;
