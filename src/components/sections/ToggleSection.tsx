import React, { useState } from "react";

/**
 * Component that toggles between sections of the website.
 */
function ToggleSection({
  sections,
  activeSection,
  onSectionClick,
}: {
  sections: string[];
  activeSection: string | null;
  onSectionClick: (section: string) => void;
}) {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleSectionMouseEnter = (section: string) => {
    setHoveredSection(section);
  };

  const handleSectionMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <nav className="flex flex-col" aria-label="Sections">
      {sections.map((section) => (
        <button
          aria-label={section}
          key={section}
          className="flex items-center mb-3 cursor-pointer text-sm font-semibold"
          onClick={() => onSectionClick(section)}
          onMouseEnter={() => handleSectionMouseEnter(section)}
          onMouseLeave={handleSectionMouseLeave}
        >
          <p
            className={`h-1 bg-skyblue mr-2 transition-all duration-300 ${
              activeSection === section || hoveredSection === section
                ? "w-12"
                : "w-8"
            }`}
            aira-hidden="true"
          ></p>
          <span
            aria-hidden="true"
            className={`${
              activeSection === section || hoveredSection === section
                ? "text-white"
                : "text-slate"
            }`}
          >
            ⸻ {section.toUpperCase()}
          </span>
        </button>
      ))}
    </nav>
  );
}

export default ToggleSection;
