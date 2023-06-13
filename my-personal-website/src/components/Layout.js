import React, { useState, useEffect } from 'react';
import QuickAbout from './QuickAbout';
import Socials from './Socials';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import ToggleSection from './ToggleSection';
import './Layout.css';

const Layout = () => {
  const sections = ['About', 'Experience', 'Projects', 'Contact'];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderSections = () => {
    return sections.map((section, index) => (
      <div key={index} className="right-section">
        {/* Render the corresponding section based on the section name */}
        {section === 'About' && <About />}
        {section === 'Experience' && <Experience />}
        {section === 'Projects' && <Projects />}
        {section === 'Contact' && <Contact />}
      </div>
    ));
  };

  return (
    <div className="layout">
      <div className="left-column">
        <QuickAbout />
        {/* Render ToggleSection component only if window width is greater than 768px */}
        {windowWidth > 768 && <ToggleSection sections={sections} />}
        <Socials />
      </div>
      <div className="right-column">
        <div className="right-content">{renderSections()}</div>
      </div>
    </div>
  );
};

export default Layout;

