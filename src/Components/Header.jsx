import React from 'react';
import {IoChevronBackOutline} from 'react-icons/io5'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {GiNetworkBars} from 'react-icons/gi'
import {IoIosWifi} from 'react-icons/io'
import {BsBatteryFull, BsDashSquare, BsThreeDots} from 'react-icons/bs'
import {CgEditFlipH} from 'react-icons/cg'
import {GoShare} from 'react-icons/go'
import {IoMdRemoveCircleOutline} from 'react-icons/io'

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

        <div className='blur'>
          <div className='content'>
            <div className='toggle'>
              <BsThreeDots />
            </div>
            <div className='options'>
              <div>
                <span>Edit</span>
                <span>
                  <CgEditFlipH />
                </span>
              </div>
              <div>
                <span>Courier Info</span>
                <span>
                  <BsDashSquare />
                </span>
              </div>
              <div>
                <span>Share</span>
                <span>
                  <GoShare />
                </span>
              </div>
              <div>
                <span>Remove</span>
                <span>
                  <IoMdRemoveCircleOutline />
                </span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>

    </div>
  );
};

export default Header;
