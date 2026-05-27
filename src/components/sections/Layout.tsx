import {
  type FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";
import QuickAbout from "./QuickAbout";
import Socials from "./Socials";
import ToggleSection from "./ToggleSection";

const SECTIONS = ["About", "Experience", "Projects", "Blog", "Contact"];

const Layout: FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const rightColumnRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = useMemo<Record<string, React.RefObject<HTMLElement>>>(
    () => ({
      About: aboutRef,
      Experience: experienceRef,
      Projects: projectsRef,
      Blog: blogRef,
      Contact: contactRef,
    }),
    [],
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    for (const section of SECTIONS) {
      const sectionElement = sectionRefs[section].current;
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section);
        }
      }
    }
  }, [sectionRefs]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleSectionClick = (section: string) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  const renderSections = () => {
    return SECTIONS.map((section) => (
      <section
        key={section}
        className="font-bold text-lg flex flex-col gap-5 mb-9"
        ref={sectionRefs[section]}
      >
        {windowWidth <= 768 && (
          <h2 className="text-sm mt-7">{section.toUpperCase()}</h2>
        )}
        {section === "About" && <About />}
        {section === "Experience" && <Experience />}
        {section === "Projects" && <Projects />}
        {section === "Contact" && <Contact />}
        {section === "Blog" && <Blog />}
      </section>
    ));
  };

  return (
    <section className="h-full lg:flex lg:justify-between overflow-x-hidden">
      <section
        id="app-left-column"
        className="lg:w-1/3 lg:h-screen overflow-y-hidden lg:fixed top-0 p-5 mt-8 ml-2"
      >
        <QuickAbout />
        {windowWidth > 768 && (
          <ToggleSection
            sections={SECTIONS}
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
          />
        )}
        <section>
          <Socials />
        </section>
      </section>
      <section
        id="app-right-column"
        className="flex flex-col overflow-y-auto lg:w-2/3 p-5 lg:ml-auto"
        ref={rightColumnRef}
      >
        <section className="flex flex-col gap-5">{renderSections()}</section>
        <Footer />
      </section>
    </section>
  );
};

export default Layout;
