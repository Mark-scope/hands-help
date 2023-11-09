import React from 'react'
import { Chart } from './Chart'

function Dashboard() {
  return (
    <div className='flex flex-col space-y-6 py-12 px-14'>
        <h2></h2>

        <div className='flex space-x-8'>
            <div className='w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-600-gray'>
                <span>Mark Agyemang</span>
                <span className='text-gray-500'>Your Balance: Ghc 1000000.00</span>
            </div>
            <div className='w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-600-gray'>
                <span>Mark Agyemang</span>
                <span className='text-gray-500'>Your Expenses: Ghc 4000.00</span>
            </div>
        </div>
            <div>
                <h2>Expenses Chart</h2>
                <Chart className='w-4/5'/>
                 
            </div>
        <div className='flex space-x-8'>
            <div className='w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-600-gray'>
                <span>Your Activity</span>
                <li className='mt-4'>You sent Ghc 1000 to your mother</li>
            </div>
            <div className='w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 text-600-gray'>
                <span>Pending Bills</span>
                <li className='mt-4'>Broadband Bill : Ghc 0.00</li>
            </div>
        </div>

    </div>
  )
}

export default Dashboard