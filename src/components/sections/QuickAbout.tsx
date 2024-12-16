import React, { useState, useEffect } from "react";

const QuickAbout = (): JSX.Element => {
  const [showOwl, setShowOwl] = useState<boolean>(false);
  const [owlSrc, setOwlSrc] = useState<string>("/assets/owlSprite.gif");
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    setShowOwl(true);
    setOwlSrc("");
    setTimeout(() => {
      setOwlSrc("/assets/owlSprite.gif");
    }, 0);
  };

  const handleMouseLeave = () => {
    setShowOwl(false);
  };

  return (
    <section className="quick-about pt-5">
      <article className="quick-about-content">
        <h1 className="font-sans font-bold text-5xl mb-5 flex items-center tracking-tighter">
          <span className="mr-2 flex-shrink-0">Micah Kepe</span>
          <p className="text-3xl">🚀</p>
        </h1>
        <p className="font-semibold text-lg mb-4">
          Computer Science Student at&nbsp;
          <span
            className="relative"
            onMouseEnter={isDesktop ? handleMouseEnter : undefined}
            onMouseLeave={isDesktop ? handleMouseLeave : undefined}
            style={{ display: "inline-block" }}
          >
            <a
              href="https://www.niche.com/colleges/rice-university/"
              aria-label="Rice University"
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline decoration-indigo-500 owl-cursor"
              style={{ display: "inline-block" }}
            >
              Rice University
            </a>
            {isDesktop && (
              <img
                src={owlSrc}
                alt="Owl flying GIF image."
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-50px",
                  left: "110px",
                  opacity: showOwl ? 1 : 0,
                  transition: "opacity 0.1s ease-in-out",
                }}
              />
            )}
          </span>
        </p>
        <p className="font-semibold mb-6 mt-2 text-slate">
          Dedicated to delivering high-quality solutions.
        </p>
      </article>
    </section>
  );
};

export default QuickAbout;
