import React, { useEffect, useRef, useState } from 'react';
import Profile from '../component/Profile';
import Notification from '../component/Notification';
import { GiHamburgerMenu } from 'react-icons/gi';
import Edit from '../component/Edit';
import ChangePassword from '../component/ChangePassword';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TopBar } from '../component';

const SideMenu = [
  {
    name: 'Profile'
  },
  {
    name: 'Notification'
  },
  {
    name: 'Change Password'
  }
]


function Settings() {
  const [active, setActive] = useState('Profile');
  const [edit, setEdit] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const profileRef = useRef(null);
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
      <div className='bg-[#F6F7FC] p-5'>
         <TopBar user={user[0]}/>
      </div>
      </div>
      <div className='flex md:flex-row flex-col flex-nowrap flex-auto h-screen bg-bgColor1 overflow-auto'>
        {/* Sidebar */}
        <div className='md:w-1/4 '>
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
          <div className=' md:hidden flex justify-start items-center bg-white h-12 relative' ref={profileRef}>

            <div className='flex w-full justify-between items-center px-8'>
              <div onClick={goBack}>
                <FaArrowLeft size={30} />
              </div>

              < GiHamburgerMenu size={30} className={`ml-7`}
                onClick={() => setShowMenu(!showMenu)} />
              {showMenu && (
                <div className='absolute top-4 left-10 z-20 shadow flex-col m-[10px]  bg-white rounded justify-center items-center p-[20px] '>
                  {SideMenu.map((item, index) => (
                    <div key={index} className={`flex justify-center w-full items-center space-x-3 hover:bg-[#2BA4E71F] cursor-pointer p-2 ${active == item.name ? 'bg-[#2BA4E71F]' : 'border-b border-[#7272721f]'}`
                    }
                      onClick={() => {
                        setActive(item.name);
                        setShowMenu(false);
                        setEdit(false);
                      }
                      }
                    >
                      <a>{item?.name}</a>

                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>

          <div className='flex-col md:hidden hidden m-[10px]  bg-white rounded justify-center items-center p-[40px] '>
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
          {active === 'Profile' && user[0] && (
            edit ? (
              <Edit user={user[0].accountType === 'volunteer' ? user[1] : user[0]} />
            ) : (
              <Profile edit={edit} setEdit={setEdit} user={user[0].accountType === 'volunteer' ? user[1] : user[0]}/>
            )
          )}


          {/* Notification */}
          {active === 'Notification' && <Notification />}

          {/* Account settings */}
          {active === 'Change Password' && <ChangePassword />}

        </main>

      </div>
    </div>
  )
}

export default Settings