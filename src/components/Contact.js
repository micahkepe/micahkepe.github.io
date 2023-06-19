import React from "react";
import LinkedinLogo from "../icons/LinkedinLogo";

const Contact = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";
  return (
    <section id="contact">
      <div
        className={`contact-content font-inter text-base font-thin text-slate pr-8 pl-3 ${paddingClass}`}
      >
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
            />
          </svg>
          <a href="mailto:micahkepe@gmail.com" className="text-blue-500">
            micahkepe@gmail.com
          </a>
        </div>

        <a
          href="https://www.linkedin.com/in/micah-kepe/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center gap-2 mt-3">
            <LinkedinLogo fill="#0e76a8" className="w-6 h-6"/>{" "}
            {/* LinkedIn's brand color is #0e76a8 */}
            <span className="hover:underline decoration-green">Connect with me on LinkedIn</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;

