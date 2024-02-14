import React from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const PublicationCard = ({ data }) => {
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{data.title}</Card.Title>
          <Card.Text>
            <strong>Authors:</strong> {data.authors}
          </Card.Text>
          <Card.Text>
            <strong>Details:</strong> {data.details}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PublicationCard;
