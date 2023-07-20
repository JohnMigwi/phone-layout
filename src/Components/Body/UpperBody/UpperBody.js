import React from 'react';
import { FaBitcoin } from 'react-icons/fa';

const UpperBody = () => {
  return (
    <div className="upper-body">
      <div className="line">
        <FaBitcoin className="bitcoin-icon" />
        <div className="name">Bitcoin</div>
        <div className="symbol">BTC</div>
      </div>
      <div className="line">3.45536862 BTC</div>
      <div className="line">
        $19.4242 USD
        <span className="percentage-decrease">-2.32%</span>
      </div>
      <div className="line">
        <div className="arrow-down" />
      </div>
    </div>
  );
};

export default UpperBody;