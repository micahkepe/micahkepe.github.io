import React from "react";
import BaseComponent from "./BaseComponent";

const ExperienceComponent = ({ date, logo, title, description, link, skills }) => {
  return (
    <BaseComponent
      leftSideContent={
        <div className="flex flex-col items-start">
          <span className="mb-2">{date}</span>
          <div className="w-20 h-20 rounded-lg overflow-hidden relative shadow-lg shadow-black ml-6 mt-4">
            <img src={logo} alt="Company Logo" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
          </div>
        </div>
      }
    >
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="mt-1 font-thin text-sm text-slate mt-4 mb-4">{description}</p>
      <div>
        {skills.map((skill) => (
          <button
            key={skill}
            className="bg-teal-600 rounded px-2 py-1 text-sm font-semibold mr-2 mb-2"
          >
            {skill}
          </button>
        ))}
      </div>
    </BaseComponent>
  );
};

export default ExperienceComponent;

