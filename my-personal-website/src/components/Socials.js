import React from 'react';
import GithubIcon from '../icons/GithubLogo';
import LinkedinIcon from '../icons/LinkedinLogo';
import InstagramIcon from '../icons/InstagramLogo';

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://github.com/micahkepe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/micah-kepe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon className="social-icon" />
      </a>
      <a
        href="https://www.instagram.com/micahkepe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className="social-icon" />
      </a>
    </div>
  );
};

export default Socials;
