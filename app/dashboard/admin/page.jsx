"use client";
import Image from "next/image";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { MdNightlightRound } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import profile from "../../assets/profile-3.png";
import { FaArrowUp } from "react-icons/fa6";
import { GoListUnordered } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { MdOutlineSell } from "react-icons/md";
import { FaLongArrowAltDown } from "react-icons/fa";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";
import SessionByCountry from "@/app/components/dashboard/SessionByCountry";
import SessionSocials from '@/app/components/dashboard/SessionSocials';
import TrendingProducts from '@/app/components/dashboard/TrendingProducts';
import SalesFromSocials from '@/app/components/dashboard/SalesFromSocials';


const generateMonthlyData = (year) => {
  return [
    { name: "Jan", sales: Math.random() * 10000 },
    { name: "Feb", sales: Math.random() * 10000 },
    { name: "Mar", sales: Math.random() * 10000 },
    { name: "Apr", sales: Math.random() * 10000 },
    { name: "May", sales: Math.random() * 10000 },
    { name: "Jun", sales: Math.random() * 10000 },
    { name: "Jul", sales: Math.random() * 10000 },
    { name: "Aug", sales: Math.random() * 10000 },
    { name: "Sep", sales: Math.random() * 10000 },
    { name: "Oct", sales: Math.random() * 10000 },
    { name: "Nov", sales: Math.random() * 10000 },
    { name: "Dec", sales: Math.random() * 10000 },
  ];
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 p-2 rounded shadow-lg">
        <p className="text-black">{`${payload[0].name} : $${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }
  return null;
};

const formatYAxisTicks = (value) => {
  const thresholds = [1e3, 1e6, 1e9, 1e12];
  const suffixes = ["", "k", "m", "b", "t"];
  
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (value >= thresholds[i]) {
      return `$${(value / thresholds[i]).toFixed(0)}${suffixes[i]}k`;
    }
  }
  return value.toString();
};

const Page = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedYear, setSelectedYear] = useState(2024);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);
  };
  
  const data = generateMonthlyData(selectedYear);

  // Calculate the max sales to determine the Y-axis limits
  const maxSales = Math.max(...data.map(d => d.sales));

  // Generate an array of years for the year picker
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2024 + 1 }, (_, i) => currentYear - i);

  return (
    <div className="max-w-screen-xl mx-auto overflow-auto h-screen">
      <section className="flex items-center justify-between bg-white px-4 py-2 shadow-md rounded-full mb-6">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
          {/* Date Range Picker */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input 
              type="date" 
              className="border-none px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span className="bg-gray-200 px-2">to</span>
            <input 
              type="date" 
              className="border-none px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition duration-200 rounded-r-lg">
              Apply
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Theme Switcher */}
          <div className="flex items-center gap-2">
            <MdOutlineLightMode className="text-gray-500" />
            <Switch />
            <MdNightlightRound className="text-gray-500" />
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <Image
              src={profile}
              alt="admin profile photo"
              className="rounded-full"
              width={50}
              height={50}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto mb-6">
        {/* Orders Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-start w-60">
          <div>
            <h3 className="text-gray-600 text-sm font-semibold">Orders</h3>
            <h1 className="text-3xl font-bold text-gray-800 my-4">201</h1>
            <p className="flex items-center text-gray-500 text-sm">
              <span className="flex items-center">
                <FaArrowUp className="text-green-500 mr-1" />
                <span>10%</span>
              </span>
              <span className="ml-2">since last month</span>
            </p>
          </div>
          <div className="text-gray-400">
            <GoListUnordered className="text-3xl" />
          </div>
        </div>

        {/* Visitors Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-start w-60">
          <div>
            <h3 className="text-gray-600 text-sm font-semibold">Visitors</h3>
            <h1 className="text-3xl font-bold text-gray-800 my-4">1800</h1>
            <p className="flex items-center text-gray-500 text-sm">
              <span className="flex items-center">
                <FaArrowUp className="text-green-500 mr-1" />
                <span>18%</span>
              </span>
              <span className="ml-2">from yesterday</span>
            </p>
          </div>
          <div className="text-gray-400">
            <GoPeople className="text-3xl" />
          </div>
        </div>

        {/* Total Revenue Card */}
        <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-start w-60">
          <div>
            <h3 className="text-gray-600 text-sm font-semibold">Total Revenue</h3>
            <h1 className="text-3xl font-bold text-gray-800 my-4">$50,000</h1>
            <p className="flex items-center text-gray-500 text-sm">
              <span className="flex items-center">
                <FaArrowUp className="text-green-500 mr-1" />
                <span>25%</span>
              </span>
              <span className="ml-1">since last month</span>
            </p>
          </div>
          <div className="text-gray-400">
            <MdOutlineSell className="text-2xl" />
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-start w-60">
          <div>
            <h3 className="text-gray-600 text-sm font-semibold">Sales</h3>
            <h1 className="text-3xl font-bold text-gray-800 my-4">$10,000</h1>
            <p className="flex items-center text-gray-500 text-sm">
              <span className="flex items-center">
                <FaLongArrowAltDown className="text-red-500 mr-1" />
                <span>15%</span>
              </span>
              <span className="ml-2">from yesterday</span>
            </p>
          </div>
          <div className="text-gray-400">
            <MdOutlineSell className="text-3xl" />
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="col-span-2 bg-white shadow-md h-96 p-4 rounded-lg">
          <div className="flex justify-between mb-3">
            <h2 className="text-xl font-bold">Sales</h2>
            <div className="flex items-center gap-2">
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(Number(e.target.value))} 
                className="border rounded-md p-2"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data} barSize={20}>
              <XAxis dataKey="name" stroke="black" />
              <YAxis 
                stroke="black" 
                tickFormatter={formatYAxisTicks}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }} />
              <Legend />
              <Bar 
                dataKey="sales" 
                fill="#FA9090" 
                radius={[10, 10, 0, 0]}
                style={{ 
                  filter: "drop-shadow(6px 0px 0px rgba(0, 0, 0, 0.5))"
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="col-span-1 bg-white shadow-md h-96 p-4 rounded-lg">
          <SessionByCountry />
        </div>
      </section>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-6 mt-6">
        <div className="col-span-2 bg-white shadow-md h-96 p-4 rounded-lg">
          <SalesFromSocials />
        </div>
        <div className="col-span-1 bg-white shadow-md h-96 p-4 rounded-lg">
          <SessionSocials />
        </div>
      </section>
      <section className="w-full mb-6 mt-6 bg-white shadow-md h-96 p-4 rounded-lg">
        <TrendingProducts />
      </section>
    </div>
  );
}

export default Page;
