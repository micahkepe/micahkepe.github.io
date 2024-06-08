import React, { useState } from "react";

const QuickAbout = (): JSX.Element => {
  const [showOwl, setShowOwl] = useState<boolean>(false);
  const [owlSrc, setOwlSrc] = useState<string>("/assets/owlSprite.gif");

  const handleMouseEnter = () => {
    setShowOwl(true);
    setOwlSrc(""); // Temporarily set to an empty string to force reload
    setTimeout(() => {
      setOwlSrc("/assets/owlSprite.gif"); // Reset to the actual URL
    }, 0);
  };

  const handleMouseLeave = () => {
    setShowOwl(false);
  };

  return (
    <section className="quick-about pt-5">
      <div className="quick-about-content">
        <h1 className="font-sans font-bold text-5xl mb-5 flex items-center tracking-tighter">
          <span className="mr-2 flex-shrink-0">Micah Kepe</span>
          <div className="text-3xl">🚀</div>
        </h1>
        <p className="font-semibold text-lg mb-4">
          Computer Science Student at&nbsp;
          <span
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: "inline-block" }}
          >
            <a
              href="https://www.niche.com/colleges/rice-university/"
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline decoration-indigo-500 owl-cursor"
              style={{ display: "inline-block" }}
            >
              Rice University
            </a>
            <img
              src={owlSrc}
              alt="Owl flying GIF image."
              style={{
                position: "absolute",
                top: "-50px",
                left: "110px",
                opacity: showOwl ? 1 : 0,
                transition: "opacity 0.1s ease-in-out",
              }}
            />
          </span>
        </p>
        <p className="font-semibold mb-6 mt-2 text-slate">
          Dedicated to delivering high-quality solutions.
        </p>
      </div>
    </section>
  );
};

export default QuickAbout;
