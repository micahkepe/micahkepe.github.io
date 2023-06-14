import React from 'react';
import GithubLogo from '../icons/GithubLogo';
import LinkedinLogo from '../icons/LinkedinLogo';
import InstagramLogo from '../icons/InstagramLogo';
import './Socials.css';

const socialLinks = [
  {
    href: 'https://github.com/micahkepe',
    logo: <GithubLogo className="social-icon" />,
  },
  {
    href: 'https://www.linkedin.com/in/micah-kepe/',
    logo: <LinkedinLogo className="social-icon" />,
  },
  {
    href: 'https://www.instagram.com/micahkepe/',
    logo: <InstagramLogo className="social-icon" />,
  },
];

const Socials = () => {
  return (
    <div className="socials border-solid">
      {/* Render social links */}
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.logo}
        </a>
      ))}
    </div>
  );
};

export default Socials;


