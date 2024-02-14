import React from 'react';
import { Jumbotron } from './migration';
import { Container } from "react-bootstrap";

const Certification = ({ certifications }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {certifications.heading}
          </h2>
          {certifications.data.map((certification, index) => (
            <div key={index} className="pb-5">
              <h3 style={{ fontWeight: 'bold' }}>{certification.title}</h3>
              <p>{certification.details[0]}</p>
            </div>
          ))}
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Certification;
