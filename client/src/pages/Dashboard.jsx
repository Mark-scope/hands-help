import React, { useState } from 'react'
import TopBar from '../component/TopBar'
import { BsCameraVideo } from 'react-icons/bs'
import { RiCustomerService2Line } from 'react-icons/ri'
import {
  direction,
  bank,
  buying,
  police,
  health
} from '../assets/icons/index';
import { BsPeople } from 'react-icons/bs'
import { NoProfile } from '../assets';
import { user } from '../assets';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const services = [
    {
      name: 'Direction',
      icon: direction,
    },
    {
      name: 'Police Report',
      icon: police,
    },
    {
      name: 'Buying & Selling',
      icon: buying,
    },
    {
      name: 'Health Care Assistance',
      icon: health,
    },
    {
      name: 'Bank',
      icon: bank,
    },
  ]

  const chats = ['All', 'Comunity', 'Individual']

  const users = [
    {
      img: NoProfile,
      name: 'John Owusu',
      lastSeen: '14/03/22',
    },
    {
      img: user,
      name: 'Kojo Owusu',
      lastSeen: '14/08/22',
    },
    {
      img: NoProfile,
      name: 'Ama Serwaa',
      lastSeen: '14/06/22',
    },
  ]

  const UserCard = ({ image, name, lastSeen }) => {
    return (
      <div className='flex items-center gap-14 bg-white py-3 px-10 rounded-lg'>
        <img src={image} className='w-14 h-14 object-cover rounded-full' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#000] font-semibold'>{name}</p>
          <span>{lastSeen}</span>
        </div>
      </div>
    )
  }

  const ServiceCard = ({ name, icon }) => {

    return (
      <div className='bg-white flex items-center rounded-lg overflow-hidden h-20 gap-8 cursor-pointer'>
        <div className='bg-[#2BA4E7] px-6 h-full py-3 flex justify-center items-center'><img src={icon} className='w-8' /></div>
        <span className='font-semibold text-lg'>{name}</span>
      </div>
    )
  }
  const [active, setActive] = useState('All');
  const { theme } = useSelector((state) => state.theme);

  return (
    <div data-theme = {theme}
    className='bg-[#F6F7FC] p-10 '>
      <TopBar />
      {/* Main section  */}
      <div className=' w-full text-white flex gap-10 mt-8'>
        <div className='w-[75%]'>
          <div className='flex gap-5 justify-center items-center'>
            <div className='flex  flex-col gap-2 bg-blue py-12 px-4 w-96 rounded-lg items-center justify-center cursor-pointer sd'>
              <BsCameraVideo size={50} />
              <h1 className='text-white text-3xl'> Call Volunteer</h1>
            </div>
            <div className='flex  flex-col gap-2 bg-[#2BA4E7] px-4 w-96 py-12 rounded-lg items-center cursor-pointer sd'>
              <RiCustomerService2Line size={50} />
              <h1 className='text-white text-3xl'> Need Assistance</h1>
            </div>
          </div>

          <div className='mt-10 text-center '>
            <h3 className='font-bold text-lg text-blue'>Need Help With</h3>
            <div className='grid grid-cols-2 gap-5 mt-4 sd'>
              {services.map(service => (
                <ServiceCard key={service.name} name={service.name} icon={service.icon} />
              ))}
            </div>
          </div>
        </div>

        {/* Chat section  */}
        <div className='flex-1 text-center'>
          <h3 className='text-blue text-2xl font-bold'>Chats</h3>
          <div className='my-3 bg-white w-full flex justify-between items-center p-3 rounded-full sd'>
            {chats.map((chat) => (
              <p
                key={chat}
                className={`py-2 px-8 rounded-full hover:bg-[#373737] hover:text-white duration-300 ease-linear cursor-pointer sd ${active === chat ? 'bg-[#373737] text-white' : 'text-[#000]'
                  }`}
              >
                {chat}
              </p>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-4 bg-white py-4 px-10 rounded-lg sd'>
              <div className='w-14 h-14 rounded-full bg-blue' />
              <BsPeople className='text-[#fff]'/>
              <p className='text-[#000]'>1000  <span className='font-bold'>Chats</span></p>
            </div>

            {users.map((user, index) => (
              <UserCard key={index}
                image={user.img}
                name={user.name}
                lastSeen={user.lastSeen}
              />
            ))}

          </div>
         <div className='flex justify-center sd'>
         <p className='mt-2 py-2 px-4 text-[#000] w-fit bg-[#E1E4E7] rounded-full cursor-pointer '>View All</p>
         </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard 