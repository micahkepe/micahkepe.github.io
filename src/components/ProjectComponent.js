import React from "react";
import BaseComponent from "./BaseComponent";

const ProjectComponent = ({ image, title, description, link, skills }) => {
  return (
    <BaseComponent
      leftSideContent={
        <div className="w-40 h-20 overflow-hidden relative mr-10 shadow-lg shadow-black">
          <img
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
        </div>
      }
    >
      <h4 className="text-base font-semibold hover:text-green">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2"
        >
          <span>{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 inline-block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
      </h4>
      <p className="font-thin text-sm text-slate mt-4 mb-4">{description}</p>
      <div>
        {skills.map((skill) => (
          <button
            key={skill}
            className="bg-teal-800 rounded px-2 py-1 text-sm font-semibold mr-2 mb-2 shadow-md shadow-black"
          >
            {skill}
          </button>
        ))}
      </div>
    </BaseComponent>
  );
};

export default ProjectComponent;
