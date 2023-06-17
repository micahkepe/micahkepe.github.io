import React from "react";
import BaseComponent from "./BaseComponent";

const ProjectComponent = ({ image, title, description, link, skills }) => {
  return (
    <BaseComponent
      leftSideContent={
        <div className="w-40 h-20 overflow-hidden relative mr-10 shadow-lg shadow-black">
        <img src={image} alt={title} className="absolute top-0 left-0 w-full h-full object-cover object-center" />
      </div>}
    >
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="mt-1 font-thin text-sm text-slate mt-4 mb-4">
        {description}
      </p>
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

export default ProjectComponent;
