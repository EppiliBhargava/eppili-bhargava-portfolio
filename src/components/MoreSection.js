import React from 'react';
import Section from './Section';

function MoreSection() {
  return (
    <Section id="more" title="Career Interests & Contact">
      <div className="beyond-grid">
        <div className="beyond-card beyond-card-hobbies">
          <h3 className="beyond-label">Career Interests</h3>
          <p className="beyond-intro">
            I am interested in roles where I can apply my Java backend experience and continue
            building end-to-end development skills.
          </p>
          <ul className="beyond-list">
            <li>Java Developer</li>
            <li>Java Backend Developer</li>
            <li>Software Engineer</li>
            <li>Java Full Stack Developer</li>
          </ul>
        </div>

        <div className="beyond-card beyond-card-contact">
          <div className="beyond-section">
            <h3 className="beyond-label">Current Learning</h3>
            <div className="language-tags">
              <span className="language-tag">React</span>
              <span className="language-tag">JDBC</span>
              <span className="language-tag">Servlets & JSP</span>
              <span className="language-tag">AWS</span>
              <span className="language-tag">Generative AI</span>
            </div>
          </div>

          <div className="beyond-section">
            <h3 className="beyond-label">Contact</h3>
            <p className="beyond-contact-text">
              Connect with me on LinkedIn or email me at bhargavaeppili@gmail.com.
              I am open to Java Developer, Java Backend Developer, Software Engineer,
              and Java Full Stack Developer opportunities.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default MoreSection;
