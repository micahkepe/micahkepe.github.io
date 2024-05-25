import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer flex justify-end items-center h-20 m-7 text-slate">
      <div>
        <p>
          Website created by{" "}
          <a href="/blog" className="text-inherit hover:text-green">
            Micah Kepe
          </a>
          <br />
          Inspired by{" "}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:underline hover:text-white decoration-green"
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
          >
            React
          </a>
          ,{" "}
          <a
            href="https://nodejs.org/en"
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:text-green"
          >
            Node.js
          </a>
          , and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:text-green"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
