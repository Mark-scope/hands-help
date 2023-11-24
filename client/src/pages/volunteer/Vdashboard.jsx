import React, { useState, useEffect, useRef } from 'react';
import mask from '../../assets/Mask-group.png';
import heropic from '../../assets/images/hands-help31.png';
import { IoCallOutline } from 'react-icons/io5';
import Vsidebar from '../../component/Vsidebar';
import Vheader from '../../component/vHeader';
import TopBar from '../../component/TopBar';
import { Link } from 'react-router-dom';

function VDashboard() {
  const [menuActive, setMenuActive] = useState(false);
  const sidebarRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative h-screen'>
    <div className='bg-[#F6F7FC] p-5'>
         <TopBar />
    </div>
    
      {/* hero bar */}
      <div className='bg-blue2 bg-center bg-cover bg-no-repeat bg-blend-screen md:h-[400px] flex flex-col items-center justify-center'
      style={{
        backgroundImage: `url(${heropic})`
      }}>
        <h3 className='text-center pt-10 text-white text-3xl'>Welcome back Lily</h3>
        <div className='py-10 sd '>
          <div className='flex '>
            <div className='bg-white sd p-6 md:w-[300px] w-[160px] rounded m-2'>
              <p>Disabelled</p>
              <h3 className='text-blue2 font-bold text-[28px]'>29394</h3>
            </div>
            <div className='bg-white sd p-6 md:w-[300px] w-[160px] rounded m-2'>
              <p>Volunteers</p>
              <h3 className='text-blue2 font-bold text-[28px]'>1000</h3>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className='flex flex-col md:flex-row '>

        {/* how it works */}
        <div className='md:w-1/2 m-6  flex items-center'>
          <Link to='/volutenteer-dashboard/how-it-works'
            className='w-full py-14 px-5 rounded-xl bg-top bg-cover bg-no-repeat h-52 flex items-center '
            style={{
              backgroundImage: `url(${mask})`,
            }}
          >
            <p className='font-semibold text-2xl text-white md:text-[30px] '>Learn how <br className='md:hidden' /> it works</p>
          </Link>
        </div>

        {/* call history */}
        <div className='md:w-1/2 h-20 px-5 py-2 bg-blue mx-6 mb-6 md:my-6 rounded-lg sd flex justify-between items-center'>
          <h3 className='text-white font-semibold text-xl px- py-5'>Call History</h3>
          <div className='bg-white rounded-full p-3'>
            <IoCallOutline className='text-blue' size={20} strokeWidth={2} />
          </div>
        </div>
        {/* {menuActive && <Vsidebar menuActive={menuActive} setMenuActive={setMenuActive} ref={sidebarRef} />} */}
        </div>

      </div>
  );
}

export default VDashboard;
