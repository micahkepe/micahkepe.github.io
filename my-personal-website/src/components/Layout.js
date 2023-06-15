import React, { useState, useEffect } from "react";
import QuickAbout from "./QuickAbout";
import Socials from "./Socials";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import ToggleSection from "./ToggleSection";
import Footer from "./Footer";

const Layout = () => {
  const sections = ["About", "Experience", "Projects", "Contact"];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSections = () => {
    return sections.map((section) => (
      <div key={section} className="flex flex-col gap-5" id={section}>
        {section === "About" && <About />}
        {section === "Experience" && <Experience />}
        {section === "Projects" && <Projects />}
        {section === "Contact" && <Contact />}
        <div className="bg-white h-[400px] mt-5"></div>{" "}
        {/* This is your placeholder block */}
      </div>
    ));
  };

  return (
    <div className="h-full lg:flex overflow-x-hidden">
      <div className="lg:w-1/4 lg:h-screen overflow-y-auto lg:sticky top-0 p-5">
        <QuickAbout id="quick-about" />
        {/* Render ToggleSection component only if window width is greater than 768px */}
        {windowWidth > 768 && <ToggleSection sections={sections} />}
        <div>
          <Socials />
        </div>
      </div>
      <div className="flex flex-col overflow-y-auto lg:w-3/4 p-5">
        <div className="flex flex-col gap-5">{renderSections()}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
