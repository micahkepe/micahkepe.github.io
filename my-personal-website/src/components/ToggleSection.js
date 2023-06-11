import React from 'react';
import './ToggleSection.css'; // Import the CSS file

const ToggleSection = ({ sections }) => {
    const handleSectionClick = (section) => {
        const element = document.getElementById(section.toLowerCase());
        const rightColumn = document.querySelector('.right-column');
        const leftColumn = document.querySelector('.left-column');
      
        if (element && rightColumn && leftColumn) {
          const leftColumnOffsetTop = leftColumn.offsetTop;
          const scrollToPosition = element.offsetTop - leftColumnOffsetTop - 35;
      
          rightColumn.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth',
          });
        }
      };
      
    return (
        <div className="toggle-section">
        {sections.map((section, index) => (
            <div
            key={index}
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
