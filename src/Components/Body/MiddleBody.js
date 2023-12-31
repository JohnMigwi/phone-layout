import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import data from '../../Resource/Data';
import CustomDot from '../../Resource/CustomDot';
import CustomTooltip from '../../Resource/customtool';


const MiddleBody = ({analytics}) => {
  const [period, setPeriod] = useState('week');

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  const chartData = data[period];

  // Compute the highest and lowest values in chartData
  const maxDataValue = Math.max(...chartData.map((dataPoint) => dataPoint.uv));
  const minDataValue = Math.min(...chartData.map((dataPoint) => dataPoint.uv));

 

  return (
    <section className={`middle-section `} >
      <div className={`period-buttons `}>
        <div tabIndex={0} className="period-text" onClick={() => handlePeriodChange('day')}>
          Day
        </div>
        <div tabIndex={0} className="period-text" onClick={() => handlePeriodChange('week')}>
          Week
        </div>
        <div tabIndex={0} className="period-text" onClick={() => handlePeriodChange('month')}>
          Month
        </div>
        <div tabIndex={0} className="period-text" onClick={() => handlePeriodChange('year')}>
          Year
        </div>
      </div>
     <div className='graph'> 
      <div className='analytics'>
        <div className='left'>
          <span className='dot'></span>
          <span>
            Highest ${maxDataValue}
          </span>
        </div>
        <div className='right'>
          <span className='dot'></span>
          <span>
            Lowest ${minDataValue}
          </span>
        </div>
      </div>
      <div className="middle-body" >
        <div className="custom-tooltip-container">
            <CustomTooltip maxDataValue={maxDataValue} minDataValue={minDataValue} />
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            
            <Area type="monotone" dataKey="uv" stroke="#f7bc0a" fill="#fad157" dot={<CustomDot fill="#fad157" />} />
            
          </AreaChart>
        </ResponsiveContainer>
        <div className='btcToUsd'> 
          <span></span>
          <span>1BTC = $5.483</span>
        </div>
      </div>
    </div> 
    </ section>
  );
};

export default MiddleBody;
