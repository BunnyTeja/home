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
              <h3>{achievement.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={achievement.image} alt={achievement.title} style={{ width: '80px', height: 'auto', marginRight: '20px' }} />
                <p>{achievement.details[0]}</p>
              </div>
            </div>
          ))}
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Achievement;
