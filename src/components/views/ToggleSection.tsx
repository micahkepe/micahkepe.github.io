import React, { useState } from "react";

interface ToggleSectionProps {
  sections: string[];
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> };
}

const ToggleSection: React.FC<ToggleSectionProps> = ({
  sections,
  sectionRefs,
}) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

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
          onClick={() => handleSectionClick(section)}
          onMouseEnter={() => handleSectionMouseEnter(section)}
          onMouseLeave={handleSectionMouseLeave}
        >
          <div
            className={`h-1 w-8 bg-skyblue mr-2 transition-all duration-300 ${
              hoveredSection === section ? "" : ""
            }`}
          ></div>
          <span
            className={`${
              hoveredSection === section ? "hover:text-white" : "text-slate"
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
