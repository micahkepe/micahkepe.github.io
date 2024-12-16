import React from "react";
import BaseContentComponent from "./BaseContentComponent";
import { motion, useAnimation } from "framer-motion";

/**
 * Experience component that displays a job experience with a date, logo, title,
 * description, link, and skills.
 *
 * @param {Object} props - The props object.
 * @param {string} props.date - The date of the experience.
 * @param {string} props.logo - The logo of the company.
 * @param {string} props.title - The title of the experience.
 * @param {string} props.description - The description of the experience.
 * @param {string} props.link - The link to the experience.
 * @param {string[]} props.skills - The skills used in the experience.
 * @returns {React.JSX.Element} An experience component with the specified content.
 */
function ExperienceComponent({
  date,
  logo,
  title,
  description,
  link,
  skills,
}: {
  date: string;
  logo: string;
  title: string;
  description: string;
  link: string;
  skills: string[];
}): React.JSX.Element {
  const controls = useAnimation();

  return (
    <BaseContentComponent
      leftSideContent={
        <div className="flex flex-col items-start">
          <span className="mb-2">{date}</span>
          <div className="w-20 h-20 rounded-lg overflow-hidden relative shadow-lg shadow-black ml-6 mt-4">
            <img
              src={logo}
              alt="Company Logo"
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      }
    >
      <motion.div
        className="text-base font-semibold hover:text-green flex items-center"
        onMouseEnter={() => controls.start({ x: 1, y: -1 })}
        onMouseLeave={() => controls.start({ x: 0, y: 0 })}
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2"
        >
          <span className="flex-grow">{title}</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 flex-shrink-0 ml-1"
            animate={controls}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </motion.svg>
        </a>
      </motion.div>
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
    </BaseContentComponent>
  );
}

export default ExperienceComponent;
