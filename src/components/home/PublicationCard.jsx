import React from 'react';

import {
  Col,
} from "react-bootstrap";

const PublicationCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <h3>{data.title}</h3>
        <p>{data.authors}</p>
        <p>{data.details}</p>
      </div>
    </Col>
  );
}

export default PublicationCard;
