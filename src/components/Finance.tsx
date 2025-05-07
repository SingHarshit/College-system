"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    income: 4000,
    spent: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    income: 3000,
    spent: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    income: 2000,
    spent: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    income: 2780,
    spent: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    income: 1890,
    spent: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    income: 2390,
    spent: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    income: 3490,
    spent: 4300,
    amt: 2100,
  },
];


const Financechart=()=>{
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
        <div className='flex justify-between items-center'>
                        <h1 className='text-lg font-semibold '>Finanace</h1>
                        <Image src="/Icons/hail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" width={20} height={20}/>
                    </div>
                    <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="spent" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
                    </div>
    )
}
export default Financechart