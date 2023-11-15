import React from 'react';
import { AiOutlineClose } from "react-icons/ai";


function Notification() {
  return (
    <div className='m-[20px] px-[20px] py-[60px] md:p-[60px] bg-white rounded '>
      <h3 className='text-blue text-[24px] font-semibold '>Notifications</h3>
      <div className=' flex space-x-4 w-full justify-between mt-4 px-5 py-5 bg-white rounded-[10px] items-center shadow inline-flex'>
        <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod</p>
        <img src={AiOutlineClose} className="w-5 h-5 relative" />
      </div>
      <div className=' flex space-x-4 w-full justify-between mt-4 px-5 py-5 bg-white rounded-[10px] items-center shadow inline-flex'>
        <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod</p>
        <img src={AiOutlineClose} className="w-5 h-5 relative" />
      </div>
      <div className=' flex space-x-4 w-full justify-between mt-4 px-5 py-5 bg-white rounded-[10px] items-center shadow inline-flex'>
        <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod</p>
        <img src={AiOutlineClose} className="w-5 h-5 relative" />
      </div>
      <div className=' flex space-x-4 w-full justify-between mt-4 px-5 py-5 bg-white rounded-[10px] items-center shadow inline-flex'>
        <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod</p>
        <img src={AiOutlineClose} className="w-5 h-5 relative" />
      </div>
      <div className=' flex space-x-4 w-full justify-between mt-4 px-5 py-5 bg-white rounded-[10px] items-center shadow inline-flex'>
        <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod</p>
        <img src={AiOutlineClose} className="w-5 h-5 relative" />
      </div>
    </div>      
  )
}

export default Notification