import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import LinkedinLogo from "../icons/LinkedinLogo";

const Contact = ({ windowWidth }) => {
  const paddingClass = windowWidth > 768 ? "pt-8" : "";
  return (
    <section id="contact">
      <div
        className={`contact-content font-inter text-base font-thin text-slate pr-8 pl-3 ${paddingClass}`}
      >
        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <a className="hover:text-white" href="mailto:micahkepe@gmail.com">
                micahkepe@gmail.com
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <LinkedinLogo fill="#0e76a8" className="w-6 h-6" />{" "}
              {/* LinkedIn's brand color is #0e76a8 */}
            </dt>
            <dd>
              <a
                href="https://www.linkedin.com/in/micah-kepe/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Connect with me on LinkedIn!
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Contact;
