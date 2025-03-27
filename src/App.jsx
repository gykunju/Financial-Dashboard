import { useState } from 'react'
import { PiBellRingingBold } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const trial = () => {
    setCount((count) => count + 1)
  }

  return (
    <div className="bg-stone-50 flex flex-col justify-center transition-al transition-discrete lg:px-20">
      <header className="border-b-1 p-4 font-sans text-lg font-medium flex justify-between items-center">
        <div className="flex items-center  space-x-4">
          <div className="text-lg font-bold text-gray-300 text-center content-center rounded-full border w-10 h-10 border-gray-100 bg-blue-500">
            {" "}
            E{" "}
          </div>
          <h2>Etica Fund</h2>
        </div>
        <div className="flex justify-between space-x-5">
          <PiBellRingingBold className="w-6 h-6" />
          <HiOutlineUserCircle className="w-6 h-6" />
        </div>
      </header>

      <div className="p-5 flex flex-col space-y-5 w-full">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Welcome back, John Doe</h1>
          <h2 className="font-medium text-gray-400">
            Here's an overview of your Etica fund account
          </h2>
        </div>

        <div className="flex flex-col space-y-5  md:flex-row md:space-x-5 lg:flex-row lg:justify-between lg:space-x-5 ">
          {/* /* BALANCE */}
          <div className="flex flex-col bg-white p-5 lg:h-100 rounded-xl space-y-3 lg:w-1/2 flex-grow">
            <div className="flex justify-between items-center ">
              <p className="font-medium text-gray-400">Current Balance</p>
              <p className="bg-green-100 brightness-105 text-sm text-green-600 w-fit rounded-3xl p-1 px-4">
                ! 3.2%
              </p>
            </div>
            <h1 className="font-extrabold text-3xl">Ksh 48,500</h1>
            <hr className="border border-1 border-blue-200"></hr>
            <div className="flex flex-row justify-between items-center">
              <p className="text-gray-400 font-medium">Contribution Streak</p>
              <p>8 weeks</p>
            </div>
          </div>

          {/* PAYMENT */}

          <div className="flex flex-col bg-white p-5 rounded-xl space-y-3  lg:w-1/2 flex-grow">
            <div className="flex justify-between items-center ">
              <p className="font-medium text-gray-400">Payment Required</p>
              <p className="bg-orange-100 brightness-105 text-sm text-orange-600 w-fit rounded-3xl p-1 px-4">
                Due Tomorrow
              </p>
            </div>
            <h1 className="font-extrabold text-2xl">Ksh 500</h1>
            <hr className="border border-1 border-blue-200"></hr>
            <div className="flex flex-row justify-between items-center">
              <p className="text-gray-400 font-medium">Weekly Contribution</p>
              <p className="">Ksh 150</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-gray-400 font-medium">Late Payment Fees</p>
              <p className="">Ksh 200</p>
            </div>
            <button className="p-2 font-bold border-2 border-gray-400 rounded-lg hover:bg-gray-400 hover:text-slate-100 transition-all transition-discrete">
              Pay Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
