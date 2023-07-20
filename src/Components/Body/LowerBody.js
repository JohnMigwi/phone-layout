import React from 'react';
import { BiSolidDollarCircle } from 'react-icons/bi';

const LowerBody = () => {
  return (
    <div className="lower-body">

      <div className="left-side">
        <div className="icon">
          <BiSolidDollarCircle/>
        </div>
        <div className="line">Buy BTC</div>
      </div>

      <div className="right-side">
        <div className="icon">
          <BiSolidDollarCircle/>
        </div>
        <div className="line">Sell BTC</div>
      </div>
      
    </div>
  );
};

export default LowerBody;
