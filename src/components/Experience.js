import React from "react";
import ExperienceComponent from "./ExperienceComponent";

const Experience = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";

  const experiences = [
    {
      date: "Jun 2023 - Present",
      logo: "/king-energy-logo.png", // replace with logo 
      title: "Software Development Intern | King Energy",
      description:
        "Building internal admin tool with user friendly UI to allow for more efficient document classification and management. Additionally, use of machine learning to automate document classification.",
      link: "https://www.kingenergy.com/",
      skills: [
        "React",
        "Nest.js",
        "GDrive API",
        "Prisma",
        "JavaScript",
        "Tailwind CSS",
        "Salesforce SOQL",
      ],
    },
    {
      date: "Aug 2022 - Present",
      logo: "/eclipse-logo.png", // replace with logo
      title: "Avionics Team Member | Rice Eclipse",
      description:
        "Working in various subteams to design and implement avionics solutions for rockets in competitions such as Spaceport America Cup.",
      link: ["http://eclipse.rice.edu/"],
      skills: ["Python", "Git", "KiCAD"],
    },
  ];

  return (
    <section id="experience">
      <div className={`experience-content ${paddingClass}`}>
        <div className="section-placeholder"></div>
        {experiences.map((experience, index) => (
          <ExperienceComponent key={index} {...experience} />
        ))}

        <div className="resume-link">
          <div className="flex items-center gap-2 mt-3 cursor-pointer hover:underline decoration-green">
            <span className="text-white font-semibold text-base">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Full Resume
              </a>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
