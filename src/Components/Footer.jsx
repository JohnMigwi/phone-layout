import React from 'react';
import { PiWalletFill} from 'react-icons/pi';
import {IoCompass} from 'react-icons/io5'
import {BiSolidBell} from 'react-icons/bi'
import {RiSettings5Fill} from 'react-icons/ri'
const Footer = () => {
  return (
    <div className="footer">
      <div className='icons'>
        <span>
          <PiWalletFill/>
        </span>
        <span>
          <IoCompass />
        </span>
        <span>
          <BiSolidBell />
        </span>
        <span>
          <RiSettings5Fill />
        </span>
      </div>
      <div className='notch'>
          <span></span>
      </div>
    </div>
  );
};

export default Footer;
