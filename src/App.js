
import React, { useEffect, useRef } from 'react';
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
import MoreSection from './components/MoreSection';
import CareerContactSection from './components/CareerContactSection';

function getDocumentTop(element) {
  let top = 0;
  let current = element;

  // Use layout positions so reveal animations don't affect the calculation.
  while (current) {
    top += current.offsetTop || 0;
    current = current.offsetParent;
  }

  return top;
}

function App() {
  const profileColumnRef = useRef(null);
  const stickyTriggerRef = useRef(null);
  const shellInnerRef = useRef(null);
  const isUnstuckRef = useRef(false);

  // Keep this aligned with the desktop profile position in styles.css.
  const STICKY_TOP = 118;

  // Reveal sections as they enter the viewport.
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

    // Removed the per-card transition delay.
    // Hover effects can now respond immediately.

    return () => revealObserver.disconnect();
  }, []);

  // Prevent the profile card from overlapping lower sections.
  useEffect(() => {
    const profileEl = profileColumnRef.current;
    const triggerWrapperEl = stickyTriggerRef.current;
    const shellInnerEl = shellInnerRef.current;

    if (!profileEl || !triggerWrapperEl || !shellInnerEl) {
      return undefined;
    }

    const triggerHeadingEl =
      triggerWrapperEl.querySelector('.section-title') ||
      triggerWrapperEl;

    const isDesktop = () =>
      window.matchMedia('(min-width: 900px)').matches;

    const clearUnstuckPosition = () => {
      profileEl.classList.remove('unstuck');
      profileEl.style.removeProperty('--unstuck-left');
      profileEl.style.removeProperty('--unstuck-top');
      isUnstuckRef.current = false;
    };

    const handleScroll = () => {
      if (!isDesktop()) {
        if (isUnstuckRef.current) {
          clearUnstuckPosition();
        }
        return;
      }

      const triggerTop =
        getDocumentTop(triggerHeadingEl) - window.scrollY;

      const shouldUnstick = triggerTop <= STICKY_TOP;

      if (shouldUnstick && !isUnstuckRef.current) {
        const profileRect = profileEl.getBoundingClientRect();
        const shellRect = shellInnerEl.getBoundingClientRect();

        profileEl.style.setProperty(
          '--unstuck-left',
          `${profileRect.left - shellRect.left}px`
        );

        profileEl.style.setProperty(
          '--unstuck-top',
          `${profileRect.top - shellRect.top}px`
        );

        profileEl.classList.add('unstuck');
        isUnstuckRef.current = true;
      } else if (!shouldUnstick && isUnstuckRef.current) {
        clearUnstuckPosition();
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <div className="bg-blob" aria-hidden="true" />
      <div className="bg-rays" aria-hidden="true" />
      <div className="bg-blob-extra" aria-hidden="true" />

      <Navbar />

      <main className="main">
        <div className="shell">
          <div
            className="shell-inner"
            ref={shellInnerRef}
          >
            <div
              className="profile-column"
              ref={profileColumnRef}
            >
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

              <div
                className="reveal-on-scroll"
                ref={stickyTriggerRef}
              >
                <StackSection />
              </div>

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

              <div className="reveal-on-scroll">
                <MoreSection />
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
