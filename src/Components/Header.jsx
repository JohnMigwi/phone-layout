import React from 'react';
import {IoChevronBackOutline} from 'react-icons/io5'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {GiNetworkBars} from 'react-icons/gi'
import {IoIosWifi} from 'react-icons/io'
import {BsBatteryFull} from 'react-icons/bs'
const Header = () => {
  return (
    <div className="header">
      <div className="top">
        <span className='time'>9:45</span>
        <div className='notch'>
          <span className='earpiece'></span>
          <span className='microphone'></span>
        </div>
        <div className='icons'>
          <span className='icon'>
            <GiNetworkBars />
          </span>
          <span className='icon'>
            <IoIosWifi />
          </span>
          <span className='icon'>
            <BsBatteryFull />
          </span>
        </div>
      </div>
      <div className='bottom'>
        <span className='backArrow'>
          <IoChevronBackOutline />
        </span>
        <span className='walletName'>Bitcoin Wallet</span>
        <span className='toggle'>
          <BiDotsVerticalRounded />
        </span>
      </div>

    </div>
  );
};

export default Header;
