import React from "react";

/** Icon for Linkedin **/
const LinkedinLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 455 455"
    className="fill-current w-6 h-6 text-customgray transition-colors duration-300 hover:text-white"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M246.4 204.35v-.665c-.136.223-.324.446-.442.665h.442z"
    />
    <path
      fillRule="evenodd"
      d="M0 0v455h455V0H0zm141.522 378.002H74.016V174.906h67.506v203.096zm-33.753-230.816h-.446C84.678 147.186 70 131.585 70 112.085c0-19.928 15.107-35.087 38.211-35.087 23.109 0 37.31 15.159 37.752 35.087 0 19.5-14.643 35.101-38.194 35.101zM385 378.002h-67.524V269.345c0-27.291-9.756-45.92-34.195-45.92-18.664 0-29.755 12.543-34.641 24.693-1.776 4.34-2.24 10.373-2.24 16.459v113.426h-67.537s.905-184.043 0-203.096H246.4v28.779c8.973-13.807 24.986-33.547 60.856-33.547 44.437 0 77.744 29.02 77.744 91.398v116.465z"
    />
  </svg>
);

export default LinkedinLogo;
