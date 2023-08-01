import React from "react";
import GithubLogo from "../icons/GithubLogo";
import LinkedinLogo from "../icons/LinkedinLogo";
import InstagramLogo from "../icons/InstagramLogo";
import "./Socials.css";

const Socials = () => {
  const socialsLinks = [
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
  ];

  return (
    <div className="socials mt-4 pl-3 pt-1">
      {socialsLinks.map((socialLink, index) => (
        <div key={index} className="social-icon-container">
          <a href={socialLink.link} target="_blank" rel="noreferrer" aria-label={socialLink.name}>
            {socialLink.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
