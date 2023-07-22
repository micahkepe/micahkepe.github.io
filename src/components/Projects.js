import React from "react";
import ProjectComponent from "./ProjectComponent";

const Projects = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";

  const projects = [
    {
      image: "/artist-emulator-teaser.png",
      title: "Artist Emulator",
      description:
        "Developing a deep model that can generate music in the style of a given artist. The model is trained using a recurrent neural network (RNN), more specifically a LSTM model, and a dataset of MIDI files.",
      link: ["https://github.com/micahkepe/artist-emulator"],
      skills: ["Python", "TensorFlow", "Keras", "Music21", "MIDI"],
    },
    {
      image: "/personal-website.png",
      title: "Personal Website",
      description:
        "Developed a personal website using React, Node,js, and Tailwind CSS to showcase my skills and projects.",
      link: ["https://github.com/micahkepe/micahkepe.github.io"],
      skills: ["React", "Node", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    },
    {
      image: "/personal-assistant.png",
      title: "Custom Voice Assistant",
      description:
        "Created a customizable personal assistant by implementing Python and a user-friendly GUI interface. Leverages OpenAI API and ElevenLabs API to provide users the ability to have a personal assistant with a voice of their choice, such as a celebrity, that can respond to their written or spoken queries.",
      link: ["https://github.com/micahkepe/custom_assistant2.0"],
      skills: ["Python", "OpenAI API", "ElevenLabs API"],
    },
    {
      image: "/handwritten-digits.png",
      title: "Handwritten Digit Recognition",
      description:
        "Developed a handwritten digit recognition model using Python and the MNIST dataset. The model was trained using a convolutional neural network (CNN) and achieved an accuracy of 97.2%.",
      link: "https://github.com/micahkepe/handwritten_digits_recognition",
      skills: ["Python", "TensorFlow", "Keras", "MNIST Dataset"],
    },
  ];

  return (
    <section id="projects">
      <div className={`projects-content ${paddingClass}`}>
        <div className="section-placeholder"></div>
        {projects.slice(0, 4).map(
          (
            project,
            index // slice(0, 4) means that only the first 4 projects will be displayed, change this number to display more or less
          ) => (
            <ProjectComponent key={index} {...project} />
          )
        )}
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

export default Projects;
