// import React from "react";

// const Contact = ({ windowWidth }) => {
//   const paddingClass = windowWidth > 768 ? "pt-8" : "";
//   return (
//     <section id="contact">
//       <div
//         className={`contact-content font-inter text-base font-thin text-slate pr-8 pl-3 ${paddingClass}`}
//       >
//         <div className="flex items-center gap-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
//             />
//           </svg>
//           <a href="mailto:micahkepe@gmail.com" className="text-blue-500">
//             micahkepe@gmail.com
//           </a>
//         </div>

//         <div className="flex items-center gap-2 mt-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
//             />
//           </svg>
//           <span>+1 (818) 456-6591</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

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

