import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <p className="hero-eyebrow">Java Developer · Software Engineer</p>
      <h1 className="hero-gradient-title">Building reliable software, one system at a time.</h1>

      <div className="hero-intro">
        <p>Namaste, HRs and Hiring Managers,</p>
        <p>
          Software Engineer with 2.5+ years of professional experience at Wipro in
          Java-based backend development, enterprise software engineering, and build
          automation. Strong foundation in Core Java, OOP, Spring Boot, RESTful APIs,
          SQL, and CI/CD workflows. Currently pursuing Java Full Stack Development
          with Generative AI training, expanding skills in JDBC, Servlets, JSP,
          React, databases, AWS, and Generative AI fundamentals.
        </p>
      </div>
      <div className="hero-actions">
        <a className="btn btn-primary" href="/Eppili_Bhargava_Resume.docx" download="Eppili_Bhargava_Resume.docx">Download resume <span aria-hidden="true">↗</span></a>
        <a className="btn btn-ghost" href="https://github.com/EppiliBhargava" target="_blank" rel="noreferrer">Explore GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}

export default Hero;
