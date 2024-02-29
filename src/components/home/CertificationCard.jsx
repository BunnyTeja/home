import React from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
const CertificationCard = ({ certification }) => {
    return (
      <Col md={6}>
        <div className="certification-card">
          <img src={certification.image} alt={certification.title} className="certification-image" />
          <div className="certification-details">
            <h4>{certification.title}</h4>
            <p>{certification.details}</p>
          </div>
        </div>
      </Col>
    );
  }
  
  export default Certification;