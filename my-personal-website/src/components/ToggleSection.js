import React from 'react';
import './ToggleSection.css';

const ToggleSection = ({ sections }) => {
  const handleSectionClick = (section) => {
    const sectionElement = document.getElementById(section);
    const quickAbout = document.getElementById('quick-about');

    if (sectionElement && quickAbout) {
      const quickAboutHeight = quickAbout.getBoundingClientRect().height;
      const sectionPosition = sectionElement.getBoundingClientRect().top;

      window.scrollTo({
        top: sectionPosition - quickAboutHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="toggle-section">
      {/* Render toggleable sections */}
      {sections.map((section) => (
        <div
          key={section}
          className="section-item"
          onClick={() => handleSectionClick(section)}
        >
          <span className="section-name">{section}</span>
        </div>
      ))}
    </div>
  );
};

export default ToggleSection;
