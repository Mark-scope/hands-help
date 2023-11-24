import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoClose } from 'react-icons/io5';


function Notification() {
  return (
    <div className='bg-white h-screen'>
    <div className='flex justify-between gap-10 flex-col item-center w-full md:px-40 px-6'>
        <div className='flex flex-col gap-5 items-center w-full '>
            <h1 className='text-2xl font-semibold pt-10'>Notification</h1>
        </div>
      <div className='flex flex-col gap-2'>
            {[...Array(1)].map((_, index) => (
                  <div key={index} className='bg-white py-6 px-6 rounded-lg flex gap-5 items-center justify-between shadow-lg border-[0.1px] border-[#C4C4C4]'>
                  <p className='text-blue'>
                      Expect update next month
                  </p>
                  <IoClose size={30}/>
              </div>
            ))}
      </div>
    </div>
</div>     
  )
}

export default Notification