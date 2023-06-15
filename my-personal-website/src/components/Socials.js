import React from 'react';
import GithubLogo from '../icons/GithubLogo';
import LinkedinLogo from '../icons/LinkedinLogo';
import InstagramLogo from '../icons/InstagramLogo';

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
  const handleHover = (event) => {
    event.target.style.fill = 'white';
  };

  const handleHoverExit = (event) => {
    event.target.style.fill = '';
  };

  return (
    <div className="socials flex mt-5">
      {/* Render social links */}
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-6 h-6 mr-6"
        >
          {React.cloneElement(link.logo, {
            className: 'w-full h-full fill-current',
            onMouseEnter: handleHover,
            onMouseLeave: handleHoverExit,
          })}
        </a>
      ))}
    </div>
  );
};

export default Socials;




