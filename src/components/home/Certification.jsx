import React from 'react';
import { Jumbotron } from './migration';
import { Container, Row } from "react-bootstrap";
import CertificationCard from "./CertificationCard";

const Certification = ({ certifications }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {certifications.heading}
          </h2>
          <Row>
            {certifications.data.map((certification, index) => (
              <CertificationCard key={index} certification={certification} />
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Certification;