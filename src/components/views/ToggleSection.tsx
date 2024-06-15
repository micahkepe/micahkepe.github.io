import React, { useState } from "react";
import { ToggleSectionProps } from "../../types";

const ToggleSection: React.FC<ToggleSectionProps> = ({
  sections,
  activeSection,
  onSectionClick,
}) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleSectionMouseEnter = (section: string) => {
    setHoveredSection(section);
  };

  const handleSectionMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <div className="flex flex-col">
      {sections.map((section) => (
        <div
          key={section}
          className="flex items-center mb-3 cursor-pointer text-sm font-semibold"
          onClick={() => onSectionClick(section)}
          onMouseEnter={() => handleSectionMouseEnter(section)}
          onMouseLeave={handleSectionMouseLeave}
        >
          <div
            className={`h-1 bg-skyblue mr-2 transition-all duration-300 ${
              activeSection === section || hoveredSection === section
                ? "w-12"
                : "w-8"
            }`}
          ></div>
          <span
            className={`${
              activeSection === section || hoveredSection === section
                ? "text-white"
                : "text-slate"
            }`}
          >
            ⸻ {section.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ToggleSection;
