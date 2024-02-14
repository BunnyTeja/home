import React from 'react';
import { Jumbotron } from './migration';
import { Container } from "react-bootstrap";

const Achievement = ({ achievements }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {achievements.heading}
          </h2>
          {achievements.data.map((achievement, index) => (
            <div key={index} className="pb-5 text-center">
              <h3>{achievement.title}</h3>
              <ul>
                {achievement.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Achievement;
