import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import help from '../assets/icons/help.png'
import notification from '../assets/icons/notification.png'
import profileIcon from '../assets/icons/profile.png'
import TextInput from '../component/TextInput.jsx'
import { BsCameraVideo, BsPeople, BsQuestion } from 'react-icons/bs'
import { BiBell } from "react-icons/bi";
import { user } from '../assets';
import ProfilePopUp from './ProfilePopUp.jsx'
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Link } from 'react-router-dom'

const TopBar = () => {
  const [toggle, setToggle] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  

  return (
    <div className='flex justify-between items-center relative '>
      <img src={logo} className='w-[100px]' />

      <div className='flex gap-8 py-2 px-2 bg-white rounded-full sd'>
        <div className='bg-[#373737] text-white flex gap-4 items-center py-2 px-5 rounded-full cursor-pointer'>
          <BsCameraVideo size={20} />
          <Link to='/Makeacall' state={{volunteer: true}}>
          <span className='text-white font-semibold text-lg'>Call Volunteer</span>
        </Link>
        </div>
        <div className='bg-[#373737] text-white flex gap-4 items-center py-2 px-5 rounded-full cursor-pointer'>
          <BsPeople size={20} data-tooltip-id='profile' />
          <span className='text-white font-semibold text-lg'>Community</span>
        </div>
      </div>

      <div className='flex gap-5'>
        <div 
        data-tooltip-id='support'
        className='bg-white rounded-full  w-16 h-16 flex justify-center items-center cursor-pointer'>
          <BsQuestion size={40}  />
        </div>
        <div
         data-tooltip-id='notification' 
         className='bg-white rounded-full  flex w-16 h-16 justify-center items-center cursor-pointer'>
          <BiBell size={30}/>
        </div>
        <div 
         to='/settings'
         ref={profileRef} 
         data-tooltip-id='profile'
         className='bg-white rounded-full w-16 h-16 flex justify-center items-center cursor-pointer'>
         <img src={user} className='w-14 h-14 object-cover rounded-full'
         onClick={() => setToggle(!toggle)}
          />
        </div>
        <ReactTooltip id='support' place='bottom' content='Support' />
        <ReactTooltip id='notification' place='bottom' content='Notification' />
        <ReactTooltip id='profile' place='bottom' content='Profile' />
      </div>

      {toggle && <ProfilePopUp />}
    </div>
  )
}

export default TopBar