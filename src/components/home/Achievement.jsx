import React from 'react';
import AchievementCard from "./AchievementCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Achievement = ({ achievements }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {achievements.heading}
          </h2>
          <Row>
            {
              achievements.data.map((data, index) => {
                return <AchievementCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Achievement;
