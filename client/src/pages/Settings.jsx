import React, { useState } from 'react';
import Profile from '../component/Profile';
import Notification from '../component/Notification';
import AccountSettings from '../component/AccountSettings';
import { GiHamburgerMenu } from 'react-icons/gi';


const SideMenu = [
  {
      name : 'Profile'
  },
  {
      name : 'Notification'
  },
  {
      name : 'Account Settings'
  }
]


function Settings() {
  const [active, setActive] = useState('Profile');
  const [open, setOpen] = useState('GiHamburgerMenu')


  return (
    <div className='flex md:flex-row flex-col flex-nowrap flex-auto h-screen bg-bgColor1 overflow-auto'>
       
        {/* Sidebar */}        
        <div className='md:w-1/4 flex-wrap flex-auto '>
            {/* desktop */}
            <div className='flex-col md:flex hidden m-[10px]  bg-white rounded justify-center items-center p-[40px] '>
              {SideMenu.map((item, index) => (
                      <div key={index} className={`flex justify-center w-full items-center space-x-3 hover:bg-[#2BA4E71F] cursor-pointer p-2 ${active == item.name ? 'bg-[#2BA4E71F]' : 'border-b border-[#7272721f]'}`
                  } 
                  onClick={() => setActive(item.name)}
                  >     
                              <a>{item?.name}</a>
                            
                      </div>
                  ))}
            </div>
            
            {/* phones */}
            <div className=' md:hidden flex justify-start items-center bg-white h-12'>
              < GiHamburgerMenu className={`ml-7 +  ${open == GiHamburgerMenu ? '': '' }` }/>
            </div>
            <div className='flex-col md:hidden hidden  m-[10px]  bg-white rounded justify-center items-center p-[40px] '>
              {SideMenu.map((item, index) => (
                      <div key={index} className={`flex justify-center w-full items-center space-x-3 hover:bg-[#2BA4E71F] cursor-pointer p-2 ${active == item.name ? 'bg-[#2BA4E71F]' : 'border-b border-[#7272721f]'}`
                  } 
                  onClick={() => setActive(item.name)}
                  >     
                              <a>{item?.name}</a>
                            
                      </div>
                  ))}
            </div>
        </div>

        <main className='md:w-3/4 wrap flex-auto' >
            {/* Profile */}
            {active === 'Profile' && <Profile />}

            {/* Notification */}
            {active === 'Notification' && <Notification />}

            {/* Account settings */}
            {active === 'Account Settings' && <AccountSettings />}
        
        </main>

    </div>
  )
}

export default Settings