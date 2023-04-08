import React from 'react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const Marks = () => {
    const data = [
        {
          name: 'Math',
          marks: 4000,
          quiz: 2400,
          amt: 2400,
        },
        {
          name: 'English',
          marks: 3000,
          quiz: 1398,
          amt: 2210,
        },
        {
          name: 'Bangla',
          marks: 2000,
          quiz: 9800,
          amt: 2290,
        },
        {
          name: 'ICT',
          marks: 2780,
          quiz: 3908,
          amt: 2000,
        },
        {
          name: 'Economics',
          marks: 1890,
          quiz: 4800,
          amt: 2181,
        },
        {
          name: 'Peripherals',
          marks: 2390,
          quiz: 3800,
          amt: 2500,
        },
        {
          name: 'Social',
          marks: 3490,
          quiz: 4300,
          amt: 2100,
        },
      ];
    return (
        <div>
            <AreaChart height={400} width={500} data={data}>
                <Area type={'monotone'} dataKey={'marks'}></Area>
                <Area type={'monotone'} dataKey={'quiz'}></Area>
                <Area type={'monotone'} dataKey={'amt'}></Area>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </AreaChart>
        </div>
    );
};

export default Marks;