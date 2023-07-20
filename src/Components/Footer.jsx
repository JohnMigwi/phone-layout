import React from 'react';
import { HiFolderRemove } from 'react-icons/hi';
import {IoCompass} from 'react-icons/io5'
import {BiSolidBell} from 'react-icons/bi'
import {RiSettings5Fill} from 'react-icons/ri'
const Footer = () => {
  return (
    <div className="footer">
      <div className='icons'>
        <span>
          <HiFolderRemove/>
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
