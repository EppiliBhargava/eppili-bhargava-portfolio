import React from 'react';
import Section from './Section';

function JourneySection() {
  return (
    <Section id="journey" title="Professional Journey">
      <div className="journey">
        <p>
          I began my software development career as a <strong>Java Developer Intern</strong>
          at Quantumware Technical Services Pvt. Ltd., where I gained practical experience
          with Core Java, OOP principles, debugging, testing, and collaborative development.
        </p>
        <p>
          I then joined <strong>Wipro</strong> as a Java Developer, working for 2 years and
          6 months on backend services, RESTful APIs, database operations, CI/CD workflows,
          and unit testing in an Agile/Scrum environment.
        </p>
        <p>
          I am currently pursuing <strong>Java Full Stack Development with Generative AI</strong>
          training to expand my skills across Java web technologies, frontend development,
          databases, AWS, and Generative AI fundamentals.
        </p>
      </div>
    </Section>
  );
}

export default JourneySection;
