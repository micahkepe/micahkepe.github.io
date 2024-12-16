import { FC } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import LinkedinLogo from "../icons/LinkedinLogo";

/** View for the contact section */
const Contact: FC = () => {
  return (
    <section id="contact">
      <article className="contact-content pt-0 sm:pt-8 text-base font-thin text-slate pr-8 pl-3">
        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
          <p className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <a
                className="hover:text-white hover:underline decoration-green"
                href="mailto:micahkepe@gmail.com"
              >
                micahkepe@gmail.com
              </a>
            </dd>
          </p>
          <p className="flex gap-x-4">
            <dt className="flex-none">
              <LinkedinLogo
                fill="currentColor"
                className="w-6 h-6 text-sky-700"
              />{" "}
            </dt>
            <dd>
              <a
                href="https://www.linkedin.com/in/micah-kepe/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:underline decoration-green"
              >
                Connect with me on LinkedIn!
              </a>
            </dd>
          </p>
        </dl>
      </article>
    </section>
  );
};

export default Contact;
