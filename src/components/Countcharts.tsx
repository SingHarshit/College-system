"use client"
import { count } from 'console';
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'total',
    count:50,
    fill: 'white',
  },
  {
    name: 'boys',
    count:34,
    fill: '#83a6ed',
  },
  {
    name: 'girls',
    count:16,
    fill: '#FDE047',
  },
  
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};
const Countcharts=()=>{
    return(
        <div className='bg-white rounded-xl w-full h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold '>Students</h1>
                <Image src="/Icons/hail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={20} height={20}/>
            </div>
          <div className='w-full h-[75%]'>
             <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
           
            label={{ position: 'insideStart', fill: '#fff' }}
            background
        
            dataKey="count"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
        </RadialBarChart>
      </ResponsiveContainer>
     
      </div>
      <div className='flex justify-center gap-16'> 
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-blue-300 rounded-full'/>
          <h1 className='font-bold '>1,234</h1>
          <h2 className='text-xs text-gray-300'> boys(55%)</h2>

        </div>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-yellow-300 rounded-full'/>
          <h1 className='font-bold '>1,254</h1>
          <h2 className='text-xs text-gray-300'> girls(55%)</h2>

        </div>

      </div>
        </div>
    )
}
export default Countcharts