import React, { useState } from 'react'
import Vheader from '../../component/Vheader.jsx'
import user from '../../assets/images/image2.png';
import { IoCallOutline, IoClose } from 'react-icons/io5';
import Vsidebar from '../../component/Vsidebar';
const Vnotification = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div>
            <Vheader setMenuActive={setMenuActive} />
            <div className='bg-bgColor1'>
                <div className='flex justify-between gap-10 flex-col item-center w-full md: px-40'>
                    <div className='flex flex-col gap-5 items-center w-full '>
                        <h1 className='text-2xl font-semibold pt-10'>Notification</h1>
                    </div>
                  <div className='flex flex-col gap-2'>
                        {[...Array(5)].map((_, index) => (
                              <div key={index} className='bg-white py-10 px-6 rounded-lg flex gap-5 items-center justify-between shadow-lg border-[0.1px] border-[#C4C4C4]'>
                              <p className='text-blue'>
                                  Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit,
                                  sed do eiusmod
                              </p>
                              <IoClose size={40}/>
                          </div>
                        ))}
                  </div>
                </div>
            </div>
            {menuActive && <Vsidebar menuActive={menuActive} setMenuActive={setMenuActive} />}
        </div>
    )
}

export default Vnotification