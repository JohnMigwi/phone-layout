import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 1.8,
    pv: 1,
    amt: 1,
  },
  {
    name: 'Page B',
    uv: 2.4,
    pv: 1,
    amt: 1,
  },
  {
    name: 'Page C',
    uv: 2.3,
    pv: 1,
    amt: 1,
  },
  {
    name: 'Page D',
    uv: 2.5,
    pv: 1,
    amt: 1,
  },
  {
    name: 'Page E',
    uv: 2.2,
    pv: 1,
    amt: 1,
  },

  {
    name: 'Page G',
    uv: 2.3,
    pv: 1,
    amt: 1,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-area-chart-uw0k8';

  render() {
    return (
    <div className="middle-body">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#f7bc0a" fill="#fad157" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    );
  }
}
