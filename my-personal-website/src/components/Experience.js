import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      {/* <h2>Experience</h2> */}
      <div className="experience-content">
        <div className="section-placeholder"></div>
        <div className="bg-white h-[400px] mt-5"></div>

        <div className="resume-link">
          <div className="flex items-center gap-2 mt-3 cursor-pointer hover:underline decoration-green">
          <span className="text-white font-semibold text-base">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Full Resume
            </a>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
