import React from "react";

/** View component that displays the footer of the website. */
const Footer: React.FC = () => {
  return (
    <footer className="footer flex justify-end items-center h-20 m-7 text-slate">
      <section>
        <p>
          Website created by{" "}
          <a
            href="/blog"
            className="text-inherit hover:text-green"
            aria-label="Micah Kepe's Blog"
          >
            Micah Kepe
          </a>
          <br />
          Inspired by{" "}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:underline hover:text-white decoration-green"
            aria-label="Brittany Chiang's Portfolio"
          >
            Brittany Chiang
          </a>
        </p>
        <p className="mt-2 italic text-sm">
          Made with{" "}
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:text-green"
            aria-label="React"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://nodejs.org/en"
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:text-green"
            aria-label="Node.js"
          >
            Node.js
          </a>
          , and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:text-green"
            aria-label="Tailwind CSS"
          >
            Tailwind CSS
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
