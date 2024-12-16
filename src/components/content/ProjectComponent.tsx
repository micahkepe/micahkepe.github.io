import React, { useEffect, useState } from "react";
import BaseContentComponent from "./BaseContentComponent";
import { motion, useAnimation } from "framer-motion";

export interface ProjectComponentProps {
  image: string;
  title: string;
  description: string;
  link: string;
  skills: string[];
  showStars?: boolean;
  githubOwnerRepo?: string;
}

/**
 * Project component to display project details including image, title,
 * description, link, skills, and GitHub stars.
 *
 * @param {Object} props - Props for the ProjectComponent.
 * @param {string} props.image - Image URL for the project.
 * @param {string} props.title - Title of the project.
 * @param {string} props.description - Description of the project.
 * @param {string} props.link - Link to the project.
 * @param {string[]} props.skills - Skills used in the project.
 * @param {boolean} [props.showStars] - Whether to show GitHub stars.
 * @param {string} [props.githubOwnerRepo] - GitHub owner/repo for fetching stars.
 * @returns {React.JSX.Element} A styled project component.
 */
function ProjectComponent({
  image,
  title,
  description,
  link,
  skills,
  showStars = false,
  githubOwnerRepo,
}: ProjectComponentProps): React.JSX.Element {
  const controls = useAnimation();
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    if (showStars && githubOwnerRepo) {
      fetch(`https://api.github.com/repos/${githubOwnerRepo}`)
        .then((response) => response.json())
        .then((data) => setStars(data.stargazers_count));
    }
  }, [showStars, githubOwnerRepo]);

  return (
    <BaseContentComponent
      leftSideContent={
        <section className="w-40 h-20 overflow-hidden relative shadow-lg shadow-black sm:mr-10">
          <img
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-sm"
          />
        </section>
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
          <span>{title}</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-1"
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
      <p className="font-thin text-sm text-slate mt-4 mb-3">{description}</p>
      {showStars && stars !== null && (
        <a
          href={"https://github.com/" + githubOwnerRepo}
          rel="noreferrer noopener"
          target="_blank"
        >
          <p className="flex items-center text-sm text-gray-300 mb-4 font-medium hover:text-green outline-green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            {stars}
          </p>
        </a>
      )}
      <section>
        {skills.map((skill) => (
          <button
            key={skill}
            className="bg-teal-800 rounded px-2 py-1 text-sm font-semibold mr-2 mb-2 shadow-md shadow-black"
          >
            {skill}
          </button>
        ))}
      </section>
    </BaseContentComponent>
  );
}

export default ProjectComponent;
