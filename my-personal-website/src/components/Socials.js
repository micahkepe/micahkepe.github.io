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
    },
    {
      icon: <InstagramLogo />,
      link: "https://www.instagram.com/micahkepe",
    },
    {
      icon: <LinkedinLogo />,
      link: "https://www.linkedin.com/in/micah-kepe/",
    },
  ];

  return (
    <div className="socials mt-4">
      {socialsLinks.map((socialLink, index) => (
        <div key={index} className="social-icon-container">
          <a href={socialLink.link} target="_blank" rel="noreferrer">
            {socialLink.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
