import React, { useState, useRef } from "react";

const QuickAbout = () => {
  const [hovered, setHovered] = useState(false);
  const rocketRef = useRef();

  const animateRocket = () => {
    if (!hovered) {
      setHovered(true);
      setTimeout(() => setHovered(false), 2000); // Reset after 2 seconds (animation duration)
    }
  };

  return (
    <section className="quick-about pt-5">
      <div className="quick-about-content">
        <h1 className="font-sans font-bold text-5xl mb-5 flex items-center tracking-tighter">
          <span className="mr-2">Micah Kepe</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-8 h-8`}
            onMouseEnter={animateRocket}
            ref={rocketRef}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
        </h1>
        <p className=" font-semibold text-lg mb-4">
          Computer Science Student at&nbsp;
          <a
            href="https://www.niche.com/colleges/rice-university/"
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:underline decoration-indigo-500"
            style={{ color: "white" }}
          >
            Rice University
          </a>
        </p>
        <p className="font-semibold mb-6 mt-2 text-slate">
          Dedicated to delivering high-quality solutions.
        </p>
      </div>
    </section>
  );
};

export default QuickAbout;
