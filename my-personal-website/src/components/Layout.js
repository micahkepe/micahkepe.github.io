import React from 'react';
import QuickAbout from './QuickAbout';
import Socials from './Socials';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import ToggleSection from './ToggleSection';
import './Layout.css';
import { useState, useEffect } from 'react';

const Layout = () => {
  const sections = ['About', 'Experience', 'Projects', 'Contact'];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="layout">
      <div className="left-column">
        <QuickAbout />
        {windowWidth > 768 ? <ToggleSection sections={sections} /> : null}
        <Socials />
      </div>
      <div className="right-column">
        <div className="right-content">
          <div className="right-section">
            <About />
          </div>
          <div className="right-section">
            <Experience />
          </div>
          <div className="right-section">
            <Projects />
          </div>
          <div className="right-section">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
