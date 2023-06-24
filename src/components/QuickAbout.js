import React, { useState, useRef } from "react";

const QuickAbout = () => {
  const rocketRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateRocket = () => {
    if (isAnimating) return; // if the animation is running, do nothing
    setIsAnimating(true); // set the flag to true when the animation starts

    rocketRef.current.style.animation = "none";
    void rocketRef.current.offsetWidth;
    rocketRef.current.style.animation = "path 2s";

    const smokeInterval = setInterval(createSmoke, 100); // create smoke every 100ms

    setTimeout(() => {
      setIsAnimating(false); // set the flag to false when the animation ends
      clearInterval(smokeInterval); // stop creating smoke when the animation ends
    }, 2000); // 2000ms = 5s (the duration of your animation)
  };

  const createSmoke = () => {
    const smoke = document.createElement("div");
    smoke.className = "smoke";
    const rect = rocketRef.current.getBoundingClientRect();
    smoke.style.left = `${rect.left - smoke.offsetWidth - 2}px`;
    smoke.style.top = `${rect.top + rocketRef.current.offsetHeight - 7}px`;
    document.body.appendChild(smoke);

    // remove the smoke element after the animation ends
    setTimeout(() => {
      document.body.removeChild(smoke);
    }, 500); // 500ms = 0.5s (the duration of the smokeFade animation)
  };

  return (
    <section className="quick-about pt-5">
      <div className="quick-about-content">
        <h1 className="font-sans font-bold text-5xl mb-5 flex items-center tracking-tighter">
          <span className="mr-2">Micah Kepe</span>
          <div
            ref={rocketRef}
            className="rocket w-8 h-8"
            onMouseMove={animateRocket}
          >
            🚀
          </div>
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
