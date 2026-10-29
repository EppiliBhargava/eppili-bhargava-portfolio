import React from 'react';
import Section from './Section';

const projects = [
  {
    icon: 'JAVA',
    title: 'Java Servlet Database Operations Web Application',
    summary:
      'Built a browser-based Java Servlet application for database operations, including record selection, insertion, updating, and deletion. Integrated JDBC with Oracle Database XE and added table creation and alteration functionality through a simple HTML interface. Source code, setup documentation, and screenshots are published on GitHub.',
    technologies: 'Java · JDBC · Oracle Database XE · HTML5 · CSS3 · Apache Tomcat · Git/GitHub',
    link: 'https://github.com/EppiliBhargava/java-servlet-database-operations',
  },
  {
    icon: 'REACT',
    title: 'Personal Developer Portfolio',
    summary:
      'Designed and developed a responsive, interactive portfolio to showcase professional experience, technical skills, projects, and education. Integrated a Spotify embed and interactive UI elements, including hover effects and responsive layouts. Automated deployment to GitHub Pages using GitHub Actions.',
    technologies: 'React · JavaScript (ES6+) · HTML5 · CSS3 · Git · GitHub Actions · GitHub Pages',
    liveDemo: 'https://eppilibhargava.github.io/eppili-bhargava-portfolio/',
  },
];

function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="cards-grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <div className="card-icon" aria-hidden="true">
              <span style={{ fontWeight: 700, fontSize: project.icon === 'REACT' ? '0.7rem' : '0.9rem' }}>{project.icon}</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-summary">{project.summary}</p>
              <p className="card-meta">{project.technologies}</p>
              {project.link && (
                <p className="card-meta">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View source on GitHub
                  </a>
                </p>
              )}
              {project.liveDemo && (
                <p className="card-meta">
                  <a href={project.liveDemo} target="_blank" rel="noreferrer">
                    View live portfolio
                  </a>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;
