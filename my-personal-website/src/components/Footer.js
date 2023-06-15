import React from "react";

const Footer = () => {
  return (
    <div className="footer flex justify-end items-center h-20 m-7 text-white font-inter">
      <div>
        <p>
          Website created by Micah Kepe
          <br />
          Inspired by{" "}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:underline"
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
