import React, { useEffect, useRef, useState } from 'react'
import { IoMenu } from 'react-icons/io5';
import user from '../assets/images/image2.png';
import ProfilePopUp from './ProfilePopUp';
const Vheader = () => {
  
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
    <div className='flex justify-between items-center p-5'>
    <IoMenu
      size={30}
      className='cursor-pointer'
      onClick={() => setMenuActive(true)}
    />
    <div ref={profileRef}
      className='w-12 h-12 rounded-full cursor-pointer'
      onClick={() => setToggle(!toggle)}
    >
      <img src={user} className='w-full h-full object-cover rounded-full' />
    </div>
    {toggle && <ProfilePopUp />}
  </div>
  )
}

export default Vheader