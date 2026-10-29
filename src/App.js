
import React, { useEffect } from 'react';
import './styles.css';

import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import StackSection from './components/StackSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import JourneySection from './components/JourneySection';
import CareerContactSection from './components/CareerContactSection';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('revealed'));
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    elements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="bg-blob" aria-hidden="true" />
      <div className="bg-rays" aria-hidden="true" />
      <div className="bg-blob-extra" aria-hidden="true" />

      <Navbar />

      <main className="main">
        <div className="shell">
          <div className="shell-inner">

            {/* Profile card stays sticky through Technology Stack */}
            <div className="sticky-layout">
              <div className="profile-column">
                <ProfileCard />
              </div>

              <div className="content-column">
                <Hero />

                <div className="reveal-on-scroll">
                  <ExperienceSection />
                </div>

                <div className="reveal-on-scroll">
                  <SkillsSection />
                </div>

                <div className="reveal-on-scroll">
                  <StackSection />
                </div>
              </div>
            </div>

            {/* Content after Technology Stack */}
            <div className="content-after-stack">
              <div className="reveal-on-scroll">
                <ProjectsSection />
              </div>

              <div className="reveal-on-scroll">
                <EducationSection />
              </div>

              <div className="reveal-on-scroll">
                <JourneySection />
              </div>

              <div className="reveal-on-scroll">
                <CareerContactSection />
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} Eppili Bhargava
        </span>
      </footer>
    </div>
  );
}

export default App;
