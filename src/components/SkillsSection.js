import React from 'react';
import Section from './Section';

const SkillGroup = ({ title, items }) => (
  <div className="skill-group">
    <h3 className="skill-group-title">{title}</h3>
    <div className="skill-tags">
      {items.map((skill) => (
        <span key={skill} className="tag">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

function SkillsSection() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="skills-grid">
        <SkillGroup
          title="Programming"
          items={['Core Java', 'Object-Oriented Programming (OOP)']}
        />
        <SkillGroup
          title="Backend Development"
          items={['Spring Boot', 'JDBC', 'Servlets', 'JSP', 'RESTful Web Services']}
        />
        <SkillGroup
          title="Frontend Development"
          items={['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React']}
        />
        <SkillGroup
          title="Databases"
          items={['SQL', 'Oracle', 'MySQL', 'PostgreSQL', 'Database Design & Optimization']}
        />
        <SkillGroup
          title="Build, Version Control & CI/CD"
          items={['Maven', 'Gradle', 'Git', 'GitHub', 'Jenkins', 'Docker', 'GitHub Actions']}
        />
        <SkillGroup
          title="Testing & Development Tools"
          items={['JUnit', 'Mockito', 'VS Code', 'IntelliJ IDEA']}
        />
        <SkillGroup
          title="Cloud & Additional Technologies"
          items={['AWS (currently learning)', 'Generative AI fundamentals', 'IBM Rhapsody (SysML)', 'Unity 3D', 'Maya']}
        />
      </div>
    </Section>
  );
}

export default SkillsSection;
