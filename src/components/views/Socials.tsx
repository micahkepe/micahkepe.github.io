import React from "react";
import GithubLogo from "../icons/GithubLogo";
import LinkedinLogo from "../icons/LinkedinLogo";
import InstagramLogo from "../icons/InstagramLogo";
import DEVCommunityLogo from "../icons/DEVCommunityLogo";
import { SocialLink } from "../../types";

const Socials: React.FC = () => {
  const socialsLinks: SocialLink[] = [
    {
      icon: <GithubLogo />,
      link: "https://github.com/micahkepe",
      name: "Github",
    },
    {
      icon: <InstagramLogo />,
      link: "https://www.instagram.com/micahkepe/",
      name: "Instagram",
    },
    {
      icon: <LinkedinLogo />,
      link: "https://www.linkedin.com/in/micah-kepe/",
      name: "Linkedin",
    },
    {
      icon: <DEVCommunityLogo />,
      link: "https://dev.to/micahkepe",
      name: "DEV Community",
    },
  ];

  return (
    <div className="flex justify-start items-center space-x-10 mt-4 pl-3 pt-1">
      {socialsLinks.map((socialLink, index) => (
        <div key={index} className="inline-block">
          <a
            href={socialLink.link}
            target="_blank"
            rel="noreferrer"
            aria-label={socialLink.name}
          >
            {socialLink.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
