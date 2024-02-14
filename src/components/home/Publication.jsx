import React from 'react';
import PublicationCard from "./PublicationCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Publication = ({ publications }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {publications.heading}
          </h2>
          <Row>
            {
              publications.data.map((data, index) => {
                return <PublicationCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Publication;
