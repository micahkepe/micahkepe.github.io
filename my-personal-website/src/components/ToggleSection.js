// import React from 'react';
// import './ToggleSection.css';

// const ToggleSection = ({ sections }) => {
//   const handleSectionClick = (section) => {
//     const sectionElement = document.getElementById(section);
//     const quickAbout = document.getElementById('quick-about');

//     if (sectionElement && quickAbout) {
//       const quickAboutHeight = quickAbout.getBoundingClientRect().height;
//       const sectionPosition = sectionElement.getBoundingClientRect().top;

//       window.scrollTo({
//         top: sectionPosition - quickAboutHeight,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="toggle-section indent-3">
//       {/* Render toggleable sections */}
//       {sections.map((section) => (
//         <div
//           key={section}
//           className="section-item"
//           onClick={() => handleSectionClick(section)}
//         >
//           <span className="section-name">{section}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ToggleSection;

import React, { useState } from 'react';

const ToggleSection = ({ sections }) => {
  const [hoveredSection, setHoveredSection] = useState(null);

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

  const handleSectionMouseEnter = (section) => {
    setHoveredSection(section);
  };

  const handleSectionMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <div className="flex flex-col">
      {/* Render toggleable sections */}
      {sections.map((section) => (
        <div
          key={section}
          className="flex items-center mb-3 cursor-pointer text-sm"
          onClick={() => handleSectionClick(section)}
          onMouseEnter={() => handleSectionMouseEnter(section)}
          onMouseLeave={handleSectionMouseLeave}
        >
          <div
            className={`h-1 w-8 bg-skyblue mr-2 transition-all duration-300 ${
              hoveredSection === section ? 'font-bold italic' : ''
            }`}
          ></div>
          <span className={`${hoveredSection === section ? 'font-bold italic' : 'italic'}`}>
          ⸻ {section}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ToggleSection;





