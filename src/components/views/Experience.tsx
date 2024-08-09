import React from "react";
import ExperienceComponent from "../generic/ExperienceComponent";
import { motion, useAnimation } from "framer-motion";
import { ExperienceProps } from "../../types";

const Experience: React.FC<ExperienceProps> = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";

  const experiences = [
    {
      date: "Feb 2024 - Present",
      logo: "/assets/vislang-logo.webp",
      title: "Machine Learning Researcher | Vislang Lab @ Rice University",
      description:
        "Developing new features, tools, and datasets for the Vislang research group at Rice University in the areas of computer vision and natural language processing.",
      link: "https://vislang.ai/",
      skills: [
        "Flask",
        "Web Crawling",
        "Socket.io",
        "SQL",
        "Node.js",
        "PostgreSQL",
      ],
    },
    {
      date: "Jun 2023 - Aug 2023",
      logo: "/assets/king-energy-logo.webp",
      title: "Software Development Intern | King Energy",
      description:
        "Helped build internal admin tool with user friendly UI to allow for more efficient document classification and management. Also worked on a web app to allow for easier access to documents and data.",
      link: "https://www.kingenergy.com/",
      skills: [
        "React",
        "NestJS",
        "GDrive API",
        "Prisma",
        "TypeScript",
        "Tailwind CSS",
        "Salesforce SOQL",
      ],
    },
  ];

  const controls = useAnimation();

  return (
    <section id="experience">
      <div className={`experience-content ${paddingClass}`}>
        <div className="section-placeholder"></div>
        {experiences.slice(0, 4).map(
          (
            experience,
            index, // first 4 experiences
          ) => (
            <ExperienceComponent key={index} {...experience} />
          ),
        )}

        <motion.div
          onMouseEnter={() => controls.start({ x: 1, y: 0 })}
          onMouseLeave={() => controls.start({ x: 0, y: 0 })}
        >
          <div className="flex items-center gap-2 mt-3 cursor-pointer hover:underline decoration-green">
            <span className="text-white font-semibold text-base">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Resume
              </a>
            </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              animate={controls}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
