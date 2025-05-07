"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 70,
    absent: 60,
  },
  {
    name: "Tue",
    present: 70,
    absent: 45,
  },
  {
    name: "Wed",
    present: 75,
    absent: 30,
  },
  {
    name: "Thu",
    present: 65,
    absent: 35,
  },
  {
    name: "Fri",
    present: 80,
    absent: 20,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Attendance</h1>
      </div>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend align="left" verticalAlign="top" />
          <Bar dataKey="present" fill="#8884d8" />
          <Bar dataKey="absent" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
