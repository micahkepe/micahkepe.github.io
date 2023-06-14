import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div>
      <p>
        Website created by Micah Kepe
      <br></br> 
      Inspired by <a href="https://brittanychiang.com" target="_blank" style={ {color: "white"}} rel="noreferrer" className='no-underline hover:underline'>Brittany Chiang</a> 
      </p>
      </div>
    </div>
  );
};

export default Footer;
