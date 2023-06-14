import React, { useState, useEffect, useCallback } from 'react';
import QuickAbout from './QuickAbout';
import Socials from './Socials';
import ToggleSection from './ToggleSection';
import Footer from './Footer';
import sectionConfig from './sectionConfig';
import './Layout.css';

const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const renderSections = () =>
    Object.entries(sectionConfig).map(([section, Component], index) => (
      <div key={index} className="right-section">
        <Component />
      </div>
    ));

  return (
    <div className="layout">
      <div className="left-column">
        <QuickAbout />
        {windowWidth > 768 && <ToggleSection sections={Object.keys(sectionConfig)} />}
        <Socials />
      </div>
      <div className="right-column">
        <div className="right-content">{renderSections()}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
