import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { AiOutlineSetting } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const ProfilePopUp = () => {
  

  return (
    <div className="absolute top-16 right-5 bg-white rounded-lg py-6 shadow-xl w-72 z-20">
      <div className="flex items-center gap-3 pb-5 border-b border-[#bbbbbb] font-semibold px-4">
        <HiOutlineUserCircle size={25} className="text-[#646E80]" />
        <span>Scholar2468@gmail.com</span>
      </div>

      {/* Middle  */}
      <div className="px-4 font-semibold mt-6 mb-2">
        <Link to='/settings' className="flex items-center gap-3 hover:bg-[#E8E8E9] px-4 py-3 cursor-pointer">
          <AiOutlineSetting size={25} className="text-[#646E80]" />
          <span>Profile</span>
        </Link>
      </div>
      <div className='pt-2 border-t border-[#bbbbbb] px-4'>
          <Link
          to='/login'
           className="flex items-center gap-3 font-semibold hover:bg-[#E8E8E9] px-4 py-3 cursor-pointer">
            <IoLogOutOutline size={25} className="text-[#646E80]" />
            <span>Log Out</span>
          </Link>
        </div>
    </div>
  )
}
IoLogOutOutline
export default ProfilePopUp