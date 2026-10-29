import React from 'react';
import Section from './Section';

const tools = [
  {
    title: 'Java & Spring Boot',
    summary: 'Core Java, OOP, backend application development, and RESTful web services.',
  },
  {
    title: 'JDBC, Servlets & JSP',
    summary: 'Java web technologies and database connectivity, including a project using Oracle Database XE.',
  },
  {
    title: 'SQL & Databases',
    summary: 'SQL, Oracle, MySQL, PostgreSQL, and database design and query optimization.',
  },
  {
    title: 'Maven, Gradle & Git',
    summary: 'Build management and version control for maintaining and collaborating on software projects.',
  },
  {
    title: 'Jenkins, Docker & Testing',
    summary: 'CI/CD workflows and unit testing with JUnit and Mockito.',
  },
  {
    title: 'React, JavaScript & AWS',
    summary: 'Developing frontend skills with React and JavaScript while currently learning AWS and Generative AI fundamentals.',
  },
];

function StackSection() {
  return (
    <Section id="stack" title="Technology Stack">
      <div className="cards-grid">
        {tools.map((tool) => (
          <article key={tool.title} className="card reveal-on-scroll">
            <h3 className="card-title">{tool.title}</h3>
            <p className="card-summary">{tool.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default StackSection;
