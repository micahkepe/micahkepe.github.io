import React from 'react';
import QuickAbout from './QuickAbout';
import Socials from './Socials';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <div className="left-column">
        <QuickAbout />
        <Socials />
      </div>
      <div className="right-column">
        <div className="right-content">
          <div style={{ marginBottom: '20px' }}>
            <About />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Experience />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Projects />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
