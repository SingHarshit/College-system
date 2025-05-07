"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  
];

const Performance=()=>{
    return(
        <div className='bg-white p-4 rounded-md h-80 relative'>
            <div className='flex justify-between items-center'>
                        <h1 className='text-lg font-semibold '>Performance</h1>
                        <Image src="/Icons/hail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={20} height={20}/>
                    </div>
             <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"

          />
        </PieChart>
      </ResponsiveContainer>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1 className='text-3xl font-bold'>9.2</h1>
      <p className='text-xl font-bold'>fdf</p>
      </div>
        </div>
    )
}

export default Performance;