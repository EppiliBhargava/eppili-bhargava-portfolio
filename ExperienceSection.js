import React from 'react';
import Section from './Section';

function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        <article className="timeline-item">
          <header className="timeline-header">
            <div>
              <h3 className="timeline-title">Java Full Stack Development with Generative AI</h3>
              <p className="timeline-meta">Professional Development · In progress</p>
            </div>
            <span className="timeline-tag">Training</span>
          </header>
          <ul className="timeline-list">
            <li>
              Building knowledge across Core Java, JDBC, Servlets, JSP, Spring Boot,
              HTML, CSS, JavaScript, React, SQL, Oracle, MySQL, and AWS.
            </li>
            <li>
              Practicing REST API design, Git/GitHub workflows, frontend component
              development, and full-stack application concepts.
            </li>
            <li>
              Learning Generative AI fundamentals as part of the training program.
            </li>
          </ul>
        </article>

        <article className="timeline-item">
          <header className="timeline-header">
            <div>
              <h3 className="timeline-title">Java Developer</h3>
              <p className="timeline-meta">Wipro · February 2022 – July 2024 · Bengaluru, India</p>
            </div>
            <span className="timeline-tag">2 years 6 months</span>
          </header>
          <ul className="timeline-list">
            <li>
              Developed and maintained backend services using Java 17, Spring Boot,
              and RESTful APIs to support enterprise application functionality.
            </li>
            <li>
              Worked with MySQL and PostgreSQL to implement and optimize database
              queries, support data operations, and improve application performance.
            </li>
            <li>
              Used Git for version control and collaborated through code reviews and
              Agile/Scrum development practices.
            </li>
            <li>
              Contributed to CI/CD workflows using Jenkins and Docker, and performed
              unit testing with JUnit and Mockito to support reliable builds and code quality.
            </li>
            <li>
              Collaborated with cross-functional teams throughout sprint planning,
              development, testing, and feature delivery.
            </li>
          </ul>
        </article>

        <article className="timeline-item">
          <header className="timeline-header">
            <div>
              <h3 className="timeline-title">Java Developer Intern</h3>
              <p className="timeline-meta">Quantumware Technical Services Pvt. Ltd. · June 2021 – January 2022 · Bhubaneswar, India</p>
            </div>
            <span className="timeline-tag">Internship</span>
          </header>
          <ul className="timeline-list">
            <li>
              Developed and enhanced Java modules using Core Java and Object-Oriented
              Programming principles, following coding standards and best practices.
            </li>
            <li>
              Assisted with debugging, testing, and troubleshooting application issues
              to improve functionality and code quality.
            </li>
            <li>
              Worked with the development team to implement features from project
              requirements and maintain technical documentation.
            </li>
          </ul>
        </article>
      </div>
    </Section>
  );
}

export default ExperienceSection;
