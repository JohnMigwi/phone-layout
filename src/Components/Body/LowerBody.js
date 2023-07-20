import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const LowerBody = () => {
  return (
    <div className="lower-body">

      <div className="left-side">
        <div className="line">
          <FaDollarSign className="dollar-icon blue" />
        </div>
        <div className="line">Buy BTC</div>
      </div>

      <div className="right-side">
        <div className="line">
          <FaDollarSign className="dollar-icon pink" />
        </div>
        <div className="line">Sell BTC</div>
      </div>
      
    </div>
  );
};

export default LowerBody;
