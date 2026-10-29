
import React from 'react';
import './CareerContactSection.css';

const careerRoles = [
  { number: '01', title: 'Java Developer' },
  { number: '02', title: 'Java Backend Developer' },
  { number: '03', title: 'Software Engineer' },
  { number: '04', title: 'Java Full Stack Developer' },
];

const learningSkills = [
  'React',
  'JDBC',
  'Servlets & JSP',
  'AWS',
  'Generative AI',
];

function CareerContactSection() {
  return (
    <section
      className="career-contact-section"
      id="career-contact"
      aria-labelledby="career-contact-title"
    >
      <div className="career-section-heading">
        <div>
          <p className="career-section-eyebrow">
            NEXT CHAPTER
          </p>

          <h2
            className="career-section-title"
            id="career-contact-title"
          >
            Career Interests <span>& Contact</span>
          </h2>
        </div>

        <span className="career-open-label">
          <span className="career-pulse-dot" />
          Open to opportunities
        </span>
      </div>

      <div className="career-contact-grid">
        <article className="career-panel career-panel-main">
          <div className="career-panel-topline">
            <span className="career-icon" aria-hidden="true">
              {'</>'}
            </span>

            <span className="career-mini-label">
              CAREER INTERESTS
            </span>
          </div>

          <h3 className="career-main-heading">
            Building reliable software,
            <span> one feature at a time.</span>
          </h3>

          <p className="career-description">
            I want to apply my Java backend experience while
            continuing to build end-to-end development skills
            and create useful, maintainable applications.
          </p>

          <div className="career-role-list">
            {careerRoles.map((role) => (
              <div className="career-role" key={role.number}>
                <span className="career-role-number">
                  {role.number}
                </span>

                <span className="career-role-title">
                  {role.title}
                </span>

                <span
                  className="career-role-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            ))}
          </div>

          <div className="career-panel-footer">
            <span className="career-footer-mark">BH.</span>
            <span>Focused on growth. Ready to contribute.</span>
          </div>
        </article>

        <article className="career-panel career-panel-side">
          <div className="career-panel-topline">
            <span className="career-icon" aria-hidden="true">
              ✳
            </span>

            <span className="career-mini-label">
              CURRENT LEARNING
            </span>
          </div>

          <h3 className="career-side-heading">
            Always learning.
            <br />
            <span>Always building.</span>
          </h3>

          <p className="career-description">
            Expanding my full-stack toolkit through structured
            learning and hands-on practice.
          </p>

          <div className="career-learning-list">
            {learningSkills.map((skill, index) => (
              <span
                className="career-learning-badge"
                key={skill}
                style={{ '--badge-index': index }}
              >
                <span className="career-badge-dot" />
                {skill}
              </span>
            ))}
          </div>

          <div className="career-divider" />

          <div className="career-contact-content">
            <span className="career-mini-label">
              LET'S CONNECT
            </span>

            <h3 className="career-contact-heading">
              Have an opportunity in mind?
            </h3>

            <p className="career-description">
              I’m open to Java Developer, Java Backend Developer,
              Software Engineer and Java Full Stack Developer roles.
            </p>

            <div className="career-actions">
              <a
                className="career-button career-button-primary"
                href="mailto:bhargavaeppili@gmail.com"
              >
                Email me
                <span aria-hidden="true">↗</span>
              </a>

              <a
                className="career-button career-button-secondary"
                href="https://www.linkedin.com/in/eppilibhargava/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default CareerContactSection;
