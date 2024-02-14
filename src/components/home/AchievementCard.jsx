import React from 'react';

import {
  Col,
} from "react-bootstrap";

const AchievementCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <h3>{data.title}</h3>
        <ul>
          {data.details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </Col>
  );
}

export default AchievementCard;
