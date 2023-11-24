import React, { useState } from 'react'
import user from '../assets/images/image2.png';
import { IoCallOutline, IoLocation, IoMail } from 'react-icons/io5';

const Profile = ({edit, setEdit}) => {
    // const [menuActive, setMenuActive] = useState(false);
    return (
        <div>
            <div className='bg-white h-screen'>
                <div className='flex justify-between gap-10 flex-col item-center w-full px-5 '>
                    <div className='flex flex-col gap-5 items-center w-full '>
                        <h1 className='text-2xl font-semibold pt-10'>Profile</h1>
                        <div className='relative  w-full flex flex-col items-center'>
                            <div
                                className='w-32 h-32 rounded-full cursor-pointer bg-blue p-1 absolute'

                            >
                                <img src={user} className='w-full h-full object-cover rounded-full' />
                            </div>
                            <div className='text-center bg-white shadow-lg pt-20 mt-16 pb-8 w-full rounded-lg'>
                                <h1 className='text-3xl font-semibold pb-4'>Lily Gray</h1>
                   
                            </div>
                        </div>
                    </div>
                    <div className='bg-blue py-5 px-6 rounded-lg flex gap-5 items-end justify-between'>
                        <div>
                            <h1 className='text-white py-2 px-6 text-xl bg-[#2BA4E7] w-fit rounded-lg mb-4'>Volunteer</h1>
                            <div className='flex flex-col gap-4'>
                                <div className='flex gap-4 text-white items-center'>
                                    <IoCallOutline size={20} />
                                    <p>+233 45 0210393</p>
                                </div>
                                <div className='flex gap-4 text-white items-center'>
                                    <IoMail size={20} />
                                    <p>lilygray@gmail.com</p>
                                </div>
                                <div className='flex gap-4 text-white items-center'>
                                    <IoLocation size={20} />
                                    <p>Adum, Kuamsi, Ghana</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='bg-[#2BA4E7] py-1 px-3 rounded-lg text-white cursor-pointer'
                                onClick={() => {
                                    setEdit(true)
                                }}
                            >Edit</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {menuActive && <Vsidebar menuActive={menuActive} setMenuActive={setMenuActive} />} */}
        </div>
    )
}

export default Profile