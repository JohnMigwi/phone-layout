import React from 'react';

const CustomTooltip = ({ active, payload, label, maxDataValue, minDataValue }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>Highest: {maxDataValue}</p>
        <p>Lowest: {minDataValue}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
