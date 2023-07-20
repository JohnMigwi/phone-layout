import React from 'react';

const CustomDot = (props) => {
  const { cx, cy, r, stroke, fill } = props;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth="6" />
      <circle cx={cx} cy={cy} r={r / 10} fill="yellow" />
    </g>
  );
};

export default CustomDot;
