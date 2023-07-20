import React from 'react';
import { TiDocument, TiArrowSortedDown, TiBell, TiArchive } from 'react-icons/ti';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <TiDocument />
      </div>
      <div className="footer-icon">
        <TiArrowSortedDown />
      </div>
      <div className="footer-icon">
        <TiBell />
      </div>
      <div className="footer-icon">
        <TiArchive />
      </div>
      <div className="horizontal-line " />
    </div>
  );
};

export default Footer;
