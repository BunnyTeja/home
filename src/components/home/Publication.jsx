import React from 'react';
import PublicationCard from "./PublicationCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Publication = ({ publications }) => {
  return (
    <Jumbotron fluid className="bg-light m-0">
      <Container>
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
      </Container>
    </Jumbotron>
  );
}

export default Publication;
