import React from 'react';
import { CiMicrophoneOn, CiSearch, CiUser } from 'react-icons/ci';
import { AiOutlineClose, AiOutlineLogout } from 'react-icons/ai';
import { MdDashboardCustomize, MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from 'react-router-dom';

const Vsidebar = ({ menuActive, setMenuActive }) => {
  const links = [
    {
        name: 'Dashboard',
        icon: <MdDashboardCustomize size={30} />,
        path: '/',
      },
    {
        name: 'Notification',
        icon: <MdOutlineNotificationsActive size={30} />,
        path: 'notification',
      },
    {
      name: 'Search Call History',
      icon: <CiSearch size={30} />,
      path: '',
    },
    {
      name: 'Help Center',
      icon: <CiMicrophoneOn size={30} />,
      path: '',
    },
  ];

  return (
    <div className={`${menuActive ? 'left-0' : '-left-[100%]'} fixed top-0 bottom-0 w-[80%] h-screen bg-blue bg-opacity-95 transition duration-300`} >
      <div className='flex justify-between items-center px-5'>
        <h3 className='px-4 py-6 text-white text-2xl font-semibold'>Lily Gray</h3>
        <AiOutlineClose
          size={30}
          className='text-white cursor-pointer'
          onClick={() => setMenuActive(false)}
        />
      </div>

      <div className='flex flex-col gap-1'>
        {links.map((link) => (
          <Link
            to={`/Vdashboard/${link.path}`}
            className={`flex items-center gap-5 py-4 px-8 cursor-pointer hover:opacity-80   ${link.name !== 'Logout' ? 'bg-bgColor1 text-blue' : 'text-white'}`}
          >
            {link.icon}
            <p className='text-lg font-semibold'>{link.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vsidebar;
