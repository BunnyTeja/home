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
            <div key={index} className="pb-5">
              <ul>
                <li>{achievement.title}</li>
              </ul>
              <p>{achievement.details[0]}</p>
            </div>
          ))}
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Achievement;
