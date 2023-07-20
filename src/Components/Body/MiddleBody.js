import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import data from '../../Resource/Data'; 

const MiddleBody = () => {
  const [period, setPeriod] = useState('week'); 
  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  // Get the data for the selected period
  const chartData = data[period];

  return (
    <><div className="period-buttons">
          <button onClick={() => handlePeriodChange('day')}>Day</button>
          <button onClick={() => handlePeriodChange('week')}>Week</button>
          <button onClick={() => handlePeriodChange('month')}>Month</button>
          <button onClick={() => handlePeriodChange('year')}>Year</button>
      </div><div className="middle-body">
              <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                      width={200}
                      height={60}
                      data={chartData} 
                      margin={{
                          top: 5,
                          right: 0,
                          left: 0,
                          bottom: 0,
                      }}
                  >
                      <Area type="monotone" dataKey="uv" stroke="#f7bc0a" fill="#fad157" />
                  </AreaChart>
              </ResponsiveContainer>
          </div>
    </>
  );
};

export default MiddleBody;
