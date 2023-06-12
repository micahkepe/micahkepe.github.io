import React from 'react';
import GithubLogo from '../icons/GithubLogo';
import LinkedinLogo from '../icons/LinkedinLogo';
import InstagramLogo from '../icons/InstagramLogo';
import './Socials.css'

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://github.com/micahkepe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLogo className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/micah-kepe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinLogo className="social-icon" />
      </a>
      <a
        href="https://www.instagram.com/micahkepe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramLogo className="social-icon" />
      </a>
    </div>
  );
};

export default Socials;
