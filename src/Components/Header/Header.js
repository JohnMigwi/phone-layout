import React from 'react';
import { TiArrowLeft, TiArrowSortedUp } from 'react-icons/ti';
import { FaClock, FaSignal, FaWifi, FaBatteryThreeQuarters } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header">
      <div className="top-left">
        <FaClock />
      </div>
      <div className="top-right">
        <FaSignal />
        <FaWifi />
        <FaBatteryThreeQuarters />
      </div>
      <div className="bottom">
        <div className="left">
          <TiArrowLeft />
        </div>
        <div className="center">
          BITCOIN WALLET
        </div>
        <div className="right">
          <TiArrowSortedUp />
        </div>
      </div>
    </div>
  );
};

export default Header;
