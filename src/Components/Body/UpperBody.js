import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import {SlArrowDown, SlArrowUp} from 'react-icons/sl'
import LowerBody from './LowerBody';
const UpperBody = ({handleAnalytics, analytics}) => {
  return (
    <div className="upper-body">
      <div className="bitcoin">
        <FaBitcoin className="bitcoin-icon" />
        <div className="name">Bitcoin</div>
        <div className="symbol">BTC</div>
      </div>
      <div className="amountBtc">3.45536862 BTC</div>
      <div className="amountUsd">
        <span>$19.4242 USD</span>
        <span className="percentage-decrease">-2.32%</span>
      </div>
     
      <div className="arrows">
          <span onClick={()=> handleAnalytics()} className={analytics? "": "active"}>
              <SlArrowDown />
          </span>
          <span onClick={()=> handleAnalytics()} className={analytics && 'active'}>
              <SlArrowUp />
          </span>
      </div>
      <div className='anime'>
        <div className={`${analytics && 'active'} buySell`} >
          <LowerBody/>
        </div>
      </div>
      
    </div>
  );
};

export default UpperBody;