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
          Made with React, Node.js, and Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Footer;
