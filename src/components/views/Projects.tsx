import React from "react";
import ProjectComponent from "../generic/ProjectComponent";

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
  skills: string[];
}

interface ProjectsProps {
  windowWidth: number;
}

const Projects: React.FC<ProjectsProps> = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";

  const projects: Project[] = [
    {
      image: "/assets/new-york-map.webp",
      title: "NYC Car Crash Analysis Project",
      description:
        "A collaborative project associated with STAT 405 (R for Data Science) at Rice University with the goal of analyzing car crash data in New York City. The projects aims to create meaningful visualizations and models to understand the factors that contribute to car crashes in NYC. The project also contains an interactive Shiny app that allows users to explore the data.",
      link: "https://github.com/micahkepe/stat405project",
      skills: ["R", "Data Analysis", "Data Visualization"],
    },
    {
      image: "/assets/artist-emulator-teaser.webp",
      title: "Artist Emulator LSTM",
      description:
        "A deep learning model that can generate music in the style of a given artist. The model is a Long Short-Term Memory (LSTM) neural network trained on MIDI files of Bach compositions as a proof-of-concept. The model is capable of generating music in the style of Bach, and the architecture can be extended to other artists.",
      link: "https://github.com/micahkepe/artist-emulator",
      skills: ["Python", "TensorFlow", "Keras", "Music21", "MIDI"],
    },
    {
      image: "/assets/personal-website.webp",
      title: "Personal Website",
      description:
        "Designed and developed a personal website as a portfolio to showcase my projects and skills. The website is built using React and Tailwind CSS and is hosted on GitHub Pages. The website also serves as a reflection of my growth as a developer as I continue to add new projects and skills.",
      link: "https://github.com/micahkepe/micahkepe.github.io",
      skills: ["React", "Node", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    },
    {
      image: "assets/personal-assistant.webp",
      title: "Custom Voice Assistant",
      description:
        "Created a customizable personal assistant by implementing Python and a user-friendly GUI interface. Leverages OpenAI API and ElevenLabs API to provide users the ability to have a personal assistant with a voice of their choice, such as a celebrity, that can respond to their written or spoken queries.",
      link: "https://github.com/micahkepe/custom_assistant2.0",
      skills: ["Python", "OpenAI API", "ElevenLabs API"],
    },
  ];

  return (
    <section id="projects">
      <div className={`projects-content ${paddingClass}`}>
        <div className="section-placeholder"></div>
        {projects.map((project: Project, index: number) => (
          <ProjectComponent key={index} {...project} />
        ))}
        <div className="resume-link">
          <div className="flex items-center gap-2 mt-3 cursor-pointer hover:underline decoration-green">
            <span className="text-white font-semibold text-base">
              <a
                href="https://github.com/micahkepe?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Project List
              </a>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
