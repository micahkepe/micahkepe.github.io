import { FC } from "react";
import ProjectComponent from "../content/ProjectComponent";
import { motion, useAnimation } from "framer-motion";

/**
 * Interface for a project component. Each project has a title, description,
 * image, link, and skills.
 * @interface Project
 * @property {string} title - The title of the project.
 * @property {string} description - The description of the project.
 * @property {string} image - The image of the project.
 * @property {string} link - The link to the project.
 * @property {string[]} skills - The skills used in the project.
 * @property {boolean} [showStars] - Whether to show the stars of the project.
 * @property {string} [githubOwnerRepo] - The owner and repository of the project on GitHub.
 */
interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
  showStars?: boolean;
  showForks?: boolean;
  githubOwnerRepo?: string;
}

/**
 * Projects component that displays a list of projects with optional fields.
 */
const Projects: FC = () => {
  const projects: IProject[] = [
    {
      image: "/assets/vim.webp",
      title: "Vimtutor Sequel",
      description:
        "Vimtutor Sequel is designed to continue your Vim education from where \
        the original vimtutor left off.The project is a series of lessons \
        that cover more advanced topics in Vim, such as macros, registers, \
        and plugins.The lessons are designed to be interactive and engaging, \
        with exercises to reinforce learning.",
      link: "https://formulae.brew.sh/formula/vimtutor-sequel",
      skills: ["Vim", "Shell Scripting", "Homebrew"],
      showStars: true,
      showForks: true,
      githubOwnerRepo: "micahkepe/vimtutor-sequel",
    },
    {
      image: "/assets/monkey-rs.png",
      title: "monkey-rs",
      description:
        "A Rust implementation of an interpreter and REPL for the Monkey programming\
        language. Supports a multitude of features including, but not limited to: \
        conditionals, implicit and explicit returns, recursive functions, and closures.",
      link: "https://github.com/micahkepe/monkey-rs",
      skills: ["Rust", "Parsing", "Tokenization", "Language Design"],
      showStars: false,
      showForks: false,
      githubOwnerRepo: "micahkepe/monkey-rs",
    },
    {
      image: "/assets/quantum-computing-handbook.png",
      title: "Quantum Computing Algorithms Handbook",
      description:
        'Structured and comprehensive LaTeX notes covering the \
      material from the Rice University course "COMP 458/558: Quantum  \
      Computing Algorithms." A free and open resource for anyone looking to  \
      learn about quantum computing algorithms.Includes exercises, complete  \
      proofs, and coding snippets in Cirq and TensorFlow Quantum.',
      link: "https://micahkepe.com/comp458-notes/",
      showStars: true,
      showForks: true,
      githubOwnerRepo: "micahkepe/comp458-notes",
      skills: ["LaTeX", "Quantum Computing", "Cirq", "TensorFlow Quantum"],
    },
    {
      image: "/assets/radion.png",
      title: "radion Zola Theme",
      description:
        "A custom, minimalist theme for the Zola static site \
        generator. The theme is designed to be lightweight, fast, and easy to \
        use. It features a clean, modern design with a focus on typography \
        and readability. Includes light/dark mode, enhanced code blocks,\
        custom shortcodes, and more. ",
      link: "https://www.getzola.org/themes/radion/",
      showStars: true,
      showForks: true,
      githubOwnerRepo: "micahkepe/radion",
      skills: ["SCSS", "Zola/Tera", "CSS", "Open Source"],
    },
    {
      image: "/assets/43-monkeys.png",
      title: "43 Monkeys Game",
      description:
        "43 Monkeys is a 2D pixel art rogue-like that blends bullet hell combat, swarm-based squad control, and permanent death into a high-stakes sci-fi escape scenario. You start as a lone monkey with a mission: break out of a top-secret biotech facility and free your fellow experiments before it’s too late.",
      link: "https://alpha-prime-studios.itch.io/43-monkeys",
      showStars: true,
      githubOwnerRepo: "micahkepe/43-monkeys",
      skills: [
        "Godot",
        "Game Development",
        "GDScript",
        "Shaders",
        "Artificial Life Simulations",
      ],
    },
  ];

  const controls = useAnimation();

  return (
    <section id="projects">
      <article className="project-content pt-0 sm:pt-8">
        <section className="">
          {projects.map((project: IProject) => (
            <ProjectComponent
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              skills={project.skills}
              showStars={project.showStars}
              showForks={project.showForks}
              githubOwnerRepo={project.githubOwnerRepo}
            />
          ))}
        </section>
        <motion.div
          onMouseEnter={() => controls.start({ x: 1, y: 0 })}
          onMouseLeave={() => controls.start({ x: 0, y: 0 })}
        >
          <p className="flex items-center gap-2 mt-3 cursor-pointer hover:underline decoration-green">
            <span className="text-white font-semibold text-base">
              <a
                href="https://github.com/micahkepe?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Project List
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
          </p>
        </motion.div>
      </article>
    </section>
  );
};

export default Projects;
